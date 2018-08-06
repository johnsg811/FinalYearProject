pragma solidity ^0.4.18;
contract ServiceJobs {

    struct JobsDone {
        uint jobsID;
        bytes32 jobsDetails;
        int jobsCost;
    }
    mapping (uint => JobsDone) jd;
    uint[] public JobsDoneAccts;

    function setJobsDone(uint _jobsID, bytes32 _jobsDetails, int _jobsCost) public payable{
        JobsDone storage jobsDone = jd[_jobsID];

        jobsDone.jobsID = _jobsID;
        jobsDone.jobsDetails = _jobsDetails;
        jobsDone.jobsCost = _jobsCost;

        JobsDoneAccts.push(_jobsID) -1;
    }

    function getJobsDone() view public returns(uint[]) {
        return JobsDoneAccts;
    }

    function getJobsDoneById(uint _jobsID) view public returns (uint, bytes32, int) {
        return (jd[_jobsID].jobsID, jd[_jobsID].jobsDetails, jd[_jobsID].jobsCost);
    }

    function countJobsDone() view public returns (uint) {
        return JobsDoneAccts.length;
    }

    function getServiceJobsByName(string _jobsDetails) view public returns (uint, bytes32, int) {
        uint serviceJobsCount = JobsDoneAccts.length;
        uint jobsDoneid;
        for (uint i=0; i<serviceJobsCount; i++) {
            uint JDid = JobsDoneAccts[i];
            JobsDone storage jobsDone =  jd[JDid];
            if(keccak256(jobsDone.jobsDetails) == keccak256(_jobsDetails)){
                jobsDoneid = JDid;
                break;
            }
        }
        return (jd[jobsDoneid].jobsID, jd[jobsDoneid].jobsDetails, jd[jobsDoneid].jobsCost);

    }


}
