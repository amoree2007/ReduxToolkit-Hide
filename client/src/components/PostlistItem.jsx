import { Button, ButtonGroup } from "react-bootstrap";

const PostlistItem = ({ data, deleteRecord }) => {
  const deleteHandler = (item) => {
    if (
      window.confirm(`Are you sure you want to delete recorde ${item.title}?`)
    ) {
      deleteRecord(item.id);
    }
  };

  const records = data.map((e, index) => (
    <tr key={e.id}>
      <td>#{++index}</td>
      <td>{e.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={() => deleteHandler(e)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <> {records} </>;
};

export default PostlistItem;
