import { ListItem, ListItemText } from "@mui/material";
import { Link, useMatch } from "react-router-dom";

const MenuComp = ({ path, label }) => {
    const match = useMatch(path)
    return (
        <ListItem component={Link} to={path}>
          <ListItemText primary={label} sx={{color: match ? 'white': 'black'}}/>
        </ListItem>
    );
};

export default MenuComp