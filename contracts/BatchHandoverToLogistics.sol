// SPDX-License-Identifier: GPL3.0
pragma solidity >=0.8.0 <0.9.0;

contract BatchHandoverToLogistics {
    struct Handover {
        address logisticsAddress;
        string[] batchIds;
        uint256 batchQuantity;
        string batchPhotoIpfsHashedUrl;
        uint256 timestamp;
    }

    mapping(address => Handover[]) private handovers;

    event BatchHandoverSuccessful(
        address indexed senderAddress,
        address indexed logisticsAddress,
        string[] batchIds,
        uint256 batchQuantity,
        string batchPhotoIpfsHashedUrl,
        uint256 timestamp
    );

    modifier onlyManufacturer(address _senderAddress) {
        require(
            msg.sender == _senderAddress,
            "Only manufacturer can perform this action."
        );
        _;
    }

    function handoverToLogistics(
        address _logisticsAddress,
        string[] calldata _batchIds,
        uint256 _batchQuantity,
        string calldata _batchPhotoIpfsHashedUrl
    ) external onlyManufacturer(msg.sender) {
        require(_logisticsAddress != address(0), "Invalid logistics address");
        require(_batchIds.length > 0, "Batch IDs must not be empty");

        // Store the handover details
        handovers[msg.sender].push(
            Handover({
                logisticsAddress: _logisticsAddress,
                batchIds: _batchIds,
                batchQuantity: _batchQuantity,
                batchPhotoIpfsHashedUrl: _batchPhotoIpfsHashedUrl,
                timestamp: block.timestamp
            })
        );

        // Emit event
        emit BatchHandoverSuccessful(
            msg.sender,
            _logisticsAddress,
            _batchIds,
            _batchQuantity,
            _batchPhotoIpfsHashedUrl,
            block.timestamp
        );
    }

    function getHandoverList(
        address _manufacturer
    ) external view returns (Handover[] memory) {
        return handovers[_manufacturer];
    }
}
