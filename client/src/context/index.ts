import { SortType } from './../types/SortType';
import { UserType } from './../types/UserType';
import { createContext, useContext } from "react";

export type AuthContent = {
   isAuth: boolean;
   setIsAuth: (isAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContent>({
   isAuth: false,
   setIsAuth: (isAuth: boolean) => { }
})

export const useAuthContext = () => useContext(AuthContext)


export type SearchContent = {
   query: string;
   setQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContent>({
   query: '',
   setQuery: (query: string) => { }
})

export const useSearchContext = () => useContext(SearchContext)

export type UserContent = {
   user: UserType | null;
   setUser: (user: UserType) => void;
}

export const UserContext = createContext<UserContent>({
   user: null,
   setUser: (user: UserType) => { }
})

export const useUserContext = () => useContext(UserContext)

export type AdminContent = {
   isAdmin: boolean;
   setIsAdmin: (isAdmin: boolean) => void;
}

export const AdminContext = createContext<AdminContent>({
   isAdmin: false,
   setIsAdmin: (isAdmin: boolean) => { }
})

export const useAdminContext = () => useContext(AdminContext)

export type MenuContent = {
   menuIsActive: boolean;
   setMenuIsActive: (isActive: boolean) => void;
}

export const MenuContext = createContext<MenuContent>({
   menuIsActive: false,
   setMenuIsActive: (isAcive: boolean) => { }
})

export const useMenuContext = () => useContext(MenuContext)

export type SortContent = {
   sortMech: SortType;
   setSortMech: (sortMech: SortType) => void;
}

export const SortContext = createContext<SortContent>({
   sortMech: { year: [1900, 2050] },
   setSortMech: (sortMech: SortType) => { }
})

export const useSortContext = () => useContext(SortContext)
