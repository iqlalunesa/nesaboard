"use client";

import { 
  UserButton, 
  OrganizationSwitcher, 
  useOrganization
} from "@clerk/nextjs";

import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";
import { ModeToggle } from "@/components/theme-switcher";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { organization } = useOrganization();
  const { theme } = useTheme()

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            organizationSwitcherPopoverActionButtonIcon: {
              color: theme === "dark" ? "rgba(255, 255, 255, 0.65)" : "rgba(0,0,0, 0.65)",
            },
            organizationSwitcherPopoverActionButtonText: {
              color: theme === "dark" ? "rgba(255, 255, 255, 0.65)" : "rgba(0,0,0, 0.65)",
            }
          }
        }}
      />
      </div>
      {organization && (
        <InviteButton />
      )}
      <ModeToggle />
      <UserButton 
        appearance={{
          elements: {
            userButtonPopoverActionButtonIcon: {
              color: theme === "dark" ? "rgba(255, 255, 255, 0.65)" : "rgba(0,0,0, 0.65)"
            },
            userButtonPopoverActionButtonText: {
              color: theme === "dark" ? "rgba(255, 255, 255, 0.65)" : "rgba(0,0,0, 0.65)"
            }
          }
        }}
      />
    </div>
  );
};
