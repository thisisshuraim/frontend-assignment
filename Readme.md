# Frontend Assignment
Frontend assignment for the application for Senior Frontend Engineer at SaaS Labs, Bangalore.

# Key Points
- All API logic resides in a Utils file at `api/utils.js` for abstraction and reusability.
- All UI logic resides in a Utils file at `ui/utils.j`s for abstraction and reusability.
- Common code logic resides in a Utils file at `utils.js` for abstraction and reusability.
- All pagination logic resides in a Hook at hooks/usePagination.jsx for better abstraction and reusability.
- All screens/pages reside in `pages` directory. For now, only one page exists.
- Individual components and sub components reside in `components` directory.
- All possible constant and reused strings moved to individual `constants.js` files, for better maintainability.
- API response patched to a simpler object type for easier parsing and better performance.
- Used mappers as much as possible, to allow extremely easy additions of new keys and columns to show the user.
- Used more generic prop types (i.e not specific to projects) for TableView, Table and Pagination component, to allow using those for future use cases (i.e any and all cases other than projects as well).
- Showing loader when API call is pending for better UX.
- Showing an error component when there are no projects available, as well providing an option to refresh data by recalling API, for better UX.

# Deployed Vercel App
This project is deployed on Vercel [here](https://frontend-assignment-git-master-thisisshuraims-projects.vercel.app/).