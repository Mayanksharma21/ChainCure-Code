// SPDX-License-Identifier: GPL3.0
pragma solidity >=0.8.0 <0.9.0;

contract BatchCreation {
    struct Batch {
        address manufacturerAddress;
        string CDSCOApprovalId;
        string drugName;
        uint256 drugExpiry;
        uint256 drugQuantity;
        uint256 timestamp;
        bool isExistInMapping;
    }

    mapping(string => Batch) private allBatches;

    event BatchRegistrationSuccessfulEvent(string _batchId);

    modifier onlyManufacturer(address _manufacturer) {
        require(
            msg.sender == _manufacturer,
            "Only manufacturer can perform this action."
        );
        _;
    }

    function registerBatch(
        string calldata _batchId,
        string calldata _CDSCOApprovalId,
        string calldata _drugName,
        uint256 _drugExpiry,
        uint256 _drugQuantity
    ) external onlyManufacturer(msg.sender) {
        // Ensure the batch ID is not empty
        require(bytes(_batchId).length > 0, "Batch ID cannot be empty");

        // Ensure the batch is not already registered
        require(
            !allBatches[_batchId].isExistInMapping,
            "Batch already registered."
        );

        // Create a new batch and store it in the mapping.
        Batch storage newBatch = allBatches[_batchId];
        newBatch.manufacturerAddress = msg.sender;
        newBatch.CDSCOApprovalId = _CDSCOApprovalId;
        newBatch.drugName = _drugName;
        newBatch.drugExpiry = _drugExpiry;
        newBatch.drugQuantity = _drugQuantity;
        newBatch.timestamp = block.timestamp;
        newBatch.isExistInMapping = true;

        // Emit the event to signal that a new batch has been registered.
        emit BatchRegistrationSuccessfulEvent(_batchId);
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
            uint256 expiryDate,
            uint256 drugQuantity,
            uint256 timestamp
        )
    {
        // Ensure the batch is registered before providing its details.
        require(allBatches[_batchId].isExistInMapping, "Batch not registered.");

        // Retrieve the batch details and return them.
        Batch storage batch = allBatches[_batchId];
        return (
            batch.manufacturerAddress,
            batch.CDSCOApprovalId,
            batch.drugName,
            batch.drugExpiry,
            batch.drugQuantity,
            batch.timestamp
        );
    }
}
