import BlogList from './BlogLIst';
import useFetch from './useFetch';

const Home = () => {

    //Declare the States
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    //Decalare the functions 
    


    //Decalare the Component Render
    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading....</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs !"/> */}
            {/* The name is : {name} <button onClick={()=>{setName('Sayan')}}>Change name</button> */}
        </div>
     );
}
 
export default Home;