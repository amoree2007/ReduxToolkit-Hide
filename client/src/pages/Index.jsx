import { useCallback, useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../state/postSilce";
import Loding from "../components/Loding";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );

  return (
    <Loding loading={loading} error={error}>
      <PostList data={records} deleteRecord={deleteRecord} />;
    </Loding>
  );
};

export default Index;
