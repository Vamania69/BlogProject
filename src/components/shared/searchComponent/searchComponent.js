// import { useState, useEffect } from "react";

// import { useSelector } from "react-redux";

// // to share the search component between the home and blogspage
// // we define a custom hook that will be used in both components

// const UseSearchcomponent = () => {
//   // get the values from the search input
//   const [searchValue, setSearchValue] = useState("");

//   // get the blogsSlice from the store
//   const [blogsList, setBlogsList] = useState([]);
//    console.log(blogsList)

//   // check the state of searchvalue
//   const handleBlogs=()=>{
//       const blogs = useSelector((state) => state.blogsList.blogsList);
//       setBlogsList(blogs)
//   }
  
//     useEffect(()=>{
//       console.log(blogsList)
//    },[blogsList])

//   useEffect(() => {
//     console.log(searchValue);
//     handleBlogs()
//     //  const filteredBlogs = blogsList.blogsList.filter(blog=>{
//     //            return blog.title.toLowerCase().includes(searchValue.toLowerCase())
//     //          })
//     //          // setting the filtered blogs to the blogsList that will be passed to the blogspage and home
//     //          setBlogsList(filteredBlogs)
//   }, [searchValue]);
//   // filter the blogs based on the search value
//   const searchHandler = (value) => {
//     console.log(value);
//     setSearchValue(value);
//   };

//   return { searchValue, setSearchValue, searchHandler };
// };
// export default UseSearchcomponent;






import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useSearchComponent = () => {
  // Get the values from the search input
  const [searchValue, setSearchValue] = useState("");
 const [searchedBlogs, setSearchedBlogs] = useState(useSelector(state=>state.blogsList.blogsList))
  // Get the blogsSlice from the store using useSelector
  const blogsList = useSelector((state) => state.blogsList.blogsList);


  // Function to handle search value change
  const searchHandler = () => {
    console.log(searchValue)
    // Filter the blogs based on the search value
   const filteredBlogs = blogsList.filter((blog) =>
    blog.title.toLowerCase().includes(searchValue.toLowerCase())
  );
    console.log(filteredBlogs)
    setSearchedBlogs(filteredBlogs)
  };

  useEffect(()=>{
      searchHandler()
      console.log(searchedBlogs)
  },[searchValue])

  useEffect(()=>{
      console.log(searchedBlogs)
      setSearchedBlogs(searchedBlogs)
  },[searchedBlogs])


  
  return { searchValue, setSearchValue,  searchHandler , searchedBlogs, setSearchedBlogs};
};

export default useSearchComponent;
