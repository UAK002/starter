import SingleItem from './SingleItem';

import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

// const Items = ({ items }) => {
const Items = () => {
  // const results = useQuery({
  const { isLoading, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  console.log(data);

  return (
    <div className="items">
      {/* {items.map((item) => { */}
      {/* {data.data.taskList.map((item) => { */}
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
