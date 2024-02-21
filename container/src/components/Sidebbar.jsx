import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import {
  PowerIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

const MenuRouter = [(
  {
    id: 1,
    menu: 'Dashboard',
    link: '/dashboard',
    // icon: PresentationChartBarIcon
  }, 

  {
    id: 2,
    menu: 'Feature 1',
    link: '/feature1',
    // icon: PowerIcon
  }
)]


 
export function SidebarWithLogo() {
 const handleClick = (e) => {
  window.location.assign(e)
 }

  return (
    <Card className="h-screen w-full max-w-[40rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
         App
        </Typography>
      </div>

      <List className="p-0">
        {MenuRouter?.map((val, id) => (
          <ListItem key={id} 
            onClick={handleClick(val.link)}
          >
            <ListItemPrefix strokeWidth={3} className="h-3 w-4">
              {val?.icon}
            </ListItemPrefix>
            {val.menu}
          </ListItem>
        ))}
      </List>

    </Card>
  );
}