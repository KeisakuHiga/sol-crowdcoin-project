pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
    
}

contract Campaign {
    // this is just a definition like a shcema of Model
    // you should declare to create this struct
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests; // requests is an array of requests(struct)
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public contributorsCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum, address creater) public {
        manager = creater; // creater's address //who created this campaign
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        // mapping doesn't store the address as a key, does only boolean
        approvers[msg.sender] = true;
        contributorsCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        // if it returns true a contributer has voded
        // require(approvers[msg.sender]);
        
        // create a new struct variable of Request

        // storage can modify the original variable data
        // memory won't, just copy the original

        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    // call by each contributor to approve a spending request
    function approveRequest(uint index) public {
        // want to modify a value of requests array
        // therefore use storage
        Request storage request = requests[index];
        
        // is contributer?
        require(approvers[msg.sender]);

        // has not voted? should be false
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    // After a request has gotten enough approvals,
    // the manager can call this to get money sent 
    // to the vendor
    function finalizeRequest(uint indexOfRequest) public restricted {
        Request storage request = requests[indexOfRequest];
        
        require(request.approvalCount > (contributorsCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }

    function getSummary() public view returns (uint, uint, uint,uint, address) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            contributorsCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}







