import "bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';

function App() {

  const cardDetails = [
    {
      plan:"FREE",
      price:"0",
      cardStyle:"free",
      features:[
        {
          name:"Single User",
          enable:true
        },
        {
          name:"50GB Storage",
          enable:true
        },
        {
          name:"Unlimited Public Projects",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Projects",
          enable:false
        },
        {
          name:"Dedicated Phone Support",
         enable:false
        },
        {
          name:"Free Subdomain",
          enable:false
        },
        {
          name:"Monthly Status Reports",
          enable:false
        }
      ]
    },
    {
      plan:"PLUS",
      price:"9",
      cardStyle:"plus",
      features:[
        {
          name:"5 Users",
          enable:true
        },
        {
          name:"50GB Storage",
          enable:true
        },
        {
          name:"Unlimited Public Projects",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Projects",
          enable:true
        },
        {
          name:"Dedicated Phone Support",
         enable:true
        },
        {
          name:"Free Subdomain",
          enable:true
        },
        {
          name:"Monthly Status Reports",
          enable:false
        }
      ]
    },
    {
      plan:"PRO",
      price:"49",
      cardStyle:"pro",
      features:[
        {
          name:"Unlimited Users",
          enable:true
        },
        {
          name:"50GB Storage",
          enable:true
        },
        {
          name:"Unlimited Public Projects",
          enable:true
        },
        {
          name:"Community Access",
          enable:true
        },
        {
          name:"Unlimited Private Projects",
          enable:true
        },
        {
          name:"Dedicated Phone Support",
         enable:true
        },
        {
          name:"Free Subdomain",
          enable:true
        },
        {
          name:"Monthly Status Reports",
          enable:true
        }
      ]
    }
  ]

  return (
    <div className="App">
      <div className='container mt-5 p-5 bg-primary'>
        <div className='row'>
          {
            cardDetails.map((card=>{
              return <Card data={card}/>
            }))
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
