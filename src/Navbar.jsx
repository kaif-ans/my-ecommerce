import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context";
import InventoryIcon from "@mui/icons-material/Inventory";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 19,
    // border: `2px solid ${theme.palette.background.paper}`,
    // padding: '0 4px',
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { cart, wishlist, handleSearch } = useContext(Context);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  function handleNavigate(e) {
    if (localStorage.getItem("token")) {
      navigate("/user");
    } else {
      navigate("/signup");
    }
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => navigate("/")}>
        <IconButton size="large" aria-label="show products" color="inherit">
          <StyledBadge>
            <StorefrontIcon />
          </StyledBadge>
        </IconButton>
        <p>Products</p>
      </MenuItem>
      <MenuItem onClick={() => navigate("/wishlist")}>
        <IconButton
          size="large"
          aria-label="show wishlist notifications"
          color="inherit"
        >
          <StyledBadge badgeContent={wishlist.length} color="error">
            <FavoriteBorderIcon />
          </StyledBadge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem onClick={() => navigate("/cart")}>
        <IconButton
          size="large"
          aria-label="show cart notifications"
          color="inherit"
        >
          <StyledBadge badgeContent={cart.length} color="error">
            <AddShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <p>Shopping Cart</p>
      </MenuItem>
      <MenuItem onClick={handleNavigate}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            {/*  I DONT WANT THIS ICON HERE */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <div
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", fontSize: "larger" }}
            >
              PRODUCTS
            </div>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleSearch}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show wishlist notifications"
              color="inherit"
            >
              <StyledBadge badgeContent={wishlist.length} color="error">
                <FavoriteBorderIcon
                  fontSize="large"
                  onClick={() => navigate("/wishlist")}
                />
              </StyledBadge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show cart notifications"
              color="inherit"
            >
              <StyledBadge badgeContent={cart.length} color="error">
                <AddShoppingCartIcon
                  fontSize="large"
                  onClick={() => navigate("/cart")}
                />
              </StyledBadge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle
                fontSize="large"
                // onClick={() => navigate("/signup")}
                onClick={handleNavigate}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
