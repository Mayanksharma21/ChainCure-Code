// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract PharmaceuticalSupplyChain {
    struct Batch {
        address manufacturerAddress;
        string CDSCOApprovalId;
        string drugName;
        uint256 drugExpiry;
        uint256 drugQuantity;
        uint256 timestamp;
        address[] transferAddresses;
        string[] transferTypes;
        string[] transferBatchIds;
        uint256[] transferTimestamps;
        string[] transferPhotos;
    }

    mapping(string => Batch) public allBatches;

    event BatchTransferred(
        string indexed batchId,
        address indexed transferAddress,
        string transferType,
        string transferBatchId,
        uint256 timestamp,
        string transferPhoto
    );

    modifier onlyManufacturer(address _manufacturer) {
        require(
            msg.sender == _manufacturer,
            "Only manufacturer can perform this action."
        );
        _;
    }

    function createBatch(
        string calldata _batchId,
        address _manufacturerAddress,
        string calldata _CDSCOApprovalId,
        string calldata _drugName,
        uint256 _drugExpiry,
        uint256 _drugQuantity
    ) external {
        // Ensure the batch ID is not empty
        require(bytes(_batchId).length > 0, "Batch ID cannot be empty");

        // Ensure the batch ID doesn't already exist
        require(
            bytes(allBatches[_batchId].CDSCOApprovalId).length == 0,
            "Batch ID already exists"
        );

        // Create the batch
        Batch storage newBatch = allBatches[_batchId];
        newBatch.manufacturerAddress = _manufacturerAddress;
        newBatch.CDSCOApprovalId = _CDSCOApprovalId;
        newBatch.drugName = _drugName;
        newBatch.drugExpiry = _drugExpiry;
        newBatch.drugQuantity = _drugQuantity;
        newBatch.timestamp = block.timestamp;
    }

    function transferBatch(
        string calldata _batchId,
        address _transferAddress,
        string calldata _transferType,
        string calldata _transferBatchId,
        string calldata _transferPhoto
    ) external {
        // Ensure the batch exists
        require(
            bytes(allBatches[_batchId].CDSCOApprovalId).length > 0,
            "Batch with this ID does not exist"
        );

        // Update the batch transfer details
        Batch storage batch = allBatches[_batchId];
        batch.transferAddresses.push(_transferAddress);
        batch.transferTypes.push(_transferType);
        batch.transferBatchIds.push(_transferBatchId);
        batch.transferTimestamps.push(block.timestamp);
        batch.transferPhotos.push(_transferPhoto);

        // Emit event
        emit BatchTransferred(
            _batchId,
            _transferAddress,
            _transferType,
            _transferBatchId,
            block.timestamp,
            _transferPhoto
        );
    }

    function getBatchDetails(
        string calldata _batchId
    )
        external
        view
        returns (
            address manufacturerAddress,
            string memory CDSCOApprovalId,
            string memory drugName,
            uint256 drugExpiry,
            uint256 drugQuantity,
            uint256 timestamp,
            address[] memory transferAddresses,
            string[] memory transferTypes,
            string[] memory transferBatchIds,
            uint256[] memory transferTimestamps,
            string[] memory transferPhotos
        )
    {
        Batch storage batch = allBatches[_batchId];
        return (
            batch.manufacturerAddress,
            batch.CDSCOApprovalId,
            batch.drugName,
            batch.drugExpiry,
            batch.drugQuantity,
            batch.timestamp,
            batch.transferAddresses,
            batch.transferTypes,
            batch.transferBatchIds,
            batch.transferTimestamps,
            batch.transferPhotos
        );
    }
}
