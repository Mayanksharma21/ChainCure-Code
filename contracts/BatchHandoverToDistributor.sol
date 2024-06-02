// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract BatchHandoverToDistributor {
    struct Handover {
        address distributorAddress;
        string[] batchIds;
        uint256 batchQuantity;
        string batchPhotoIpfsHashedUrl;
        uint256 timestamp;
    }

    mapping(address => Handover[]) private handovers;

    event BatchHandoverSuccessful(
        address indexed senderAddress,
        address indexed distributorAddress,
        string[] batchIds,
        uint256 batchQuantity,
        string batchPhotoIpfsHashedUrl,
        uint256 timestamp
    );

    modifier onlyLogistics(address _senderAddress) {
        require(
            msg.sender == _senderAddress,
            "Only logistics company can perform this action."
        );
        _;
    }

    function handoverToDistributor(
        address _distributorAddress,
        string[] calldata _batchIds,
        uint256 _batchQuantity,
        string calldata _batchPhotoIpfsHashedUrl
    ) external onlyLogistics(msg.sender) {
        require(
            _distributorAddress != address(0),
            "Invalid distributor address"
        );
        require(_batchIds.length > 0, "Batch IDs must not be empty");

        // Store the handover details
        handovers[msg.sender].push(
            Handover({
                distributorAddress: _distributorAddress,
                batchIds: _batchIds,
                batchQuantity: _batchQuantity,
                batchPhotoIpfsHashedUrl: _batchPhotoIpfsHashedUrl,
                timestamp: block.timestamp
            })
        );

        // Emit event
        emit BatchHandoverSuccessful(
            msg.sender,
            _distributorAddress,
            _batchIds,
            _batchQuantity,
            _batchPhotoIpfsHashedUrl,
            block.timestamp
        );
    }

    function getHandoverList(
        address _logisticsAddress
    ) external view returns (Handover[] memory) {
        return handovers[_logisticsAddress];
    }
}
