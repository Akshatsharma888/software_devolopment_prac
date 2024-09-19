import { useLoaderData } from "react-router-dom";



function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Akshatsharma888')
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <>
      <div className="text-white flex items-center justify-center h-auto max-w-fullmax-w-full">
        <div className="flex flex-1 items-center justify-center text-3xl">
          Github Followers: {data.followers}
          <div className="flex items-center justify-center">
            <img 
              src={data.avatar_url} 
              alt="git pic" 
              className="h-auto max-w-full ml-24" 
              style={{ height: '300px', width: '300px' }} 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;