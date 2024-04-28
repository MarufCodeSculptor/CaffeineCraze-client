import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffieCard = ({ coffie }) => {
  const { _id, name, chef, supplier, taste, category, photoUrl, password } =
    coffie;
  const handleDelete = id => {
    console.log(`deleting items of `, id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        console.log(`confirmed`);
        //
      }

      fetch(`http://localhost:5000/coffie/${_id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
    });
  };
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex">
      <div className="flex-shrink-0">
        <img
          src={photoUrl}
          alt={name}
          className="h-32 w-32 object-cover rounded-md"
        />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p>
          <strong>Chef:</strong> {chef}
        </p>
        <p>
          <strong>Supplier:</strong> {supplier}
        </p>
        <p>
          <strong>Taste:</strong> {taste}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <div className="my-4">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-error mx-3"
          >
            Delete
          </button>

          <Link to={`/coffie/${_id}`} className="btn btn-outline btn-primary">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default CoffieCard;
