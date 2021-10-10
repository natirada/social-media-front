import {getPosts} from 'api/my-api';
import { useQuery } from 'react-query';

const usePostQuery = () => {
    const { data: posts = []   , ...rest } = useQuery(
        "Posts",
         getPosts,
        {
         select: (data) => data?.posts.map(( {create_date: date, content, image_public_url: urlImage, likes}: any) => ({date,content, urlImage, likes}))   
        }
      );
    
    return {
        posts,
        ...rest
    }
};


export default usePostQuery;