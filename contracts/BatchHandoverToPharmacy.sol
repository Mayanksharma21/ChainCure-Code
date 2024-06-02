// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract BatchHandoverToPharmacy {
    struct Handover {
        address pharmacyAddress;
        string[] batchIds;
        uint256 batchQuantity;
        string batchPhotoIpfsHashedUrl;
        uint256 timestamp;
    }

    mapping(address => Handover[]) public handovers;

    event BatchHandoverSuccessful(
        address indexed senderAddress,
        address indexed pharmacyAddress,
        string[] batchIds,
        uint256 batchQuantity,
        string batchPhotoIpfsHashedUrl,
        uint256 timestamp
    );

    modifier onlyDistributor(address _senderAddress) {
        require(
            msg.sender == _senderAddress,
            "Only distributor can perform this action."
        );
        _;
    }

    function handoverToPharmacy(
        address _pharmacyAddress,
        string[] calldata _batchIds,
        uint256 _batchQuantity,
        string calldata _batchPhotoIpfsHashedUrl
    ) external onlyDistributor(msg.sender) {
        require(_pharmacyAddress != address(0), "Invalid pharmacy address");
        require(_batchIds.length > 0, "Batch IDs must not be empty");

        // Store the handover details
        handovers[msg.sender].push(
            Handover({
                pharmacyAddress: _pharmacyAddress,
                batchIds: _batchIds,
                batchQuantity: _batchQuantity,
                batchPhotoIpfsHashedUrl: _batchPhotoIpfsHashedUrl,
                timestamp: block.timestamp
            })
        );

        // Emit event
        emit BatchHandoverSuccessful(
            msg.sender,
            _pharmacyAddress,
            _batchIds,
            _batchQuantity,
            _batchPhotoIpfsHashedUrl,
            block.timestamp
        );
    }

    function getHandoverList(
        address _distributorAddress
    ) external view returns (Handover[] memory) {
        return handovers[_distributorAddress];
    }
}
