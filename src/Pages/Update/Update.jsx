
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

  const coffieInfo = useLoaderData();
  const [coffie,setCoffie]=useState(coffieInfo);
  

  const id = coffie._id;
  console.log(`id is `, id);
  console.log(`coffie data is `, coffie);

  const handleAddCoffie = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

   
    const coffieData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };

    //   ------------sending data to  server ------------------------
    fetch(`http://localhost:5000/coffie/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(coffieData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
         
          Swal.fire({
            title: 'Success!',
            text: 'Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Done',
          })
          setCoffie({name:'',chef:'',supplier:'',taste:'',cetegory:'',details:'',photoUrl:''});
        }
      });
    // ----------------- sending data to server ended here -------------------
  };
  return (
    <div className="border-2 mt-10 rounded-lg bg-[#F4F3F0]">
      <form onSubmit={handleAddCoffie} className="card-body">
        <div className="flex md:gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              defaultValue={coffie.name}
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Chef"
              className="input input-bordered"
              defaultValue={coffie.chef}
              required
            />
          </div>
        </div>
        <div className="flex md:gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              className="input input-bordered"
              defaultValue={coffie.supplier}
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered"
              defaultValue={coffie.taste}
              required
            />
          </div>
        </div>
        <div className="flex md:gap-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered"
              defaultValue={coffie.category}
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="details"
              className="input input-bordered"
              defaultValue={coffie.details}
              required
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input
            type="text"
            name="photoUrl"
            placeholder="PhotoUrl"
            className="input input-bordered"
            defaultValue={coffie.photoUrl}
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
