import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from "./Logo";
import './Navbar.css'

const Nav = () => {
  return (
    <div>
      <Navbar className="nav pt-8">
        <NavbarBrand>
            <Logo />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4 font-raleway" justify="center">
            <NavbarItem>
            <Link color="foreground" href="#" className="text-yellow-300 font-semibold">
                Home
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" aria-current="page" className="text-white font-semibold">
                About Us
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="text-white font-semibold">
                Roadmap
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="text-white font-semibold">
                FAQs
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className="text-white font-semibold">
                Contact Us
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
            <Button className="hidden sm:flex bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-3xl text-black font-raleway font-bold w-44 h-11" as={Link} href="#" variant="flat">
                Connect Wallet
            </Button>
            </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default Nav
