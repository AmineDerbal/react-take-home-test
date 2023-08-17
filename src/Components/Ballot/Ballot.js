import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBallotData } from '../../redux/ballot/ballotSlice';
import Loader from '../Loader/Loader';
import Category from '../Category/Category';

const Ballot = () => {
  const {
    ballotData, isFetched, isLoading, hasError,
  } = useSelector((store) => store.ballot);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchBallotData());
    }
  }, [dispatch, isFetched]);
  if (ballotData.length === 0) {
    return <h2 className="mt-5 text-center text-3xl font-medium">No data was fetched</h2>;
  }
  if (isLoading) return <Loader />;
  if (hasError) return <h2 className="mt-5 text-center text-3xl font-medium">Error fetching data</h2>;
  return (
    <>
      <h1 className="mt-5 text-center text-4xl font-bold">Awards 2021</h1>
      {ballotData.map((category) => (
        <div key={category.id}>
          <h2 className="mt-5 text-center text-3xl font-medium">{category.id}</h2>
          <Category category={category.items} />
        </div>
      ))}
    </>
  );
};

export default Ballot;
