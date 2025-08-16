const employees = [
  {
    "id": 1,
    "firstName": "Ravi",
    "email": "ravi.kumar@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 3,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Compile and submit sales report for July.",
        "taskDate": "2025-08-20",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update client database",
        "taskDescription": "Ensure all client records are up-to-date.",
        "taskDate": "2025-08-10",
        "category": "Data Entry"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Follow up with supplier",
        "taskDescription": "Call supplier regarding delayed shipment.",
        "taskDate": "2025-08-12",
        "category": "Procurement"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "priya.sharma@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 3,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Organize marketing campaign",
        "taskDescription": "Plan and execute social media marketing strategy.",
        "taskDate": "2025-08-18",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Discuss Q3 objectives with the team.",
        "taskDate": "2025-08-15",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Website update",
        "taskDescription": "Add new blog post to company website.",
        "taskDate": "2025-08-05",
        "category": "Web"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit invoice",
        "taskDescription": "Send invoice for completed project to finance department.",
        "taskDate": "2025-08-08",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Amit",
    "email": "amit.brown@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test software update",
        "taskDescription": "Check all modules after system update.",
        "taskDate": "2025-08-14",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Document code changes",
        "taskDescription": "Update technical documentation for recent code changes.",
        "taskDate": "2025-08-11",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Resolve customer ticket #245",
        "taskDescription": "Investigate and fix reported bug in dashboard.",
        "taskDate": "2025-08-09",
        "category": "Support"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "neha.johnson@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 2
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare training material",
        "taskDescription": "Create slides for employee onboarding session.",
        "taskDate": "2025-08-17",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Conduct interview",
        "taskDescription": "Interview candidate for developer position.",
        "taskDate": "2025-08-19",
        "category": "Recruitment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update payroll",
        "taskDescription": "Adjust payroll records for August bonuses.",
        "taskDate": "2025-08-10",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "arjun.wilson@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Inspect hardware",
        "taskDescription": "Run diagnostics on company laptops.",
        "taskDate": "2025-08-13",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Repair printer",
        "taskDescription": "Fix paper jam and replace toner cartridge.",
        "taskDate": "2025-08-07",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory check",
        "taskDescription": "Verify stock levels for office supplies.",
        "taskDate": "2025-08-16",
        "category": "Inventory"
      }
    ]
  }
];



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}
 

