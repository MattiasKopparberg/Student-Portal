import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    course: "",
    Active: false,
    startingDate: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="John Doe"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your name")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your email")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+xx xx xxx xx xx"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your phone number")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your age")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Course Name
          </label>
          <input
            id="course"
            name="course"
            type="text"
            className="form-control"
            value={formData.course}
            onChange={handleChange}
            placeholder="Course Name"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your course")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="startingDate" className="form-label">
            Start Date
          </label>
          <input
            id="startingDate"
            name="startingDate"
            type="date"
            className="form-control"
            value={formData.startingDate}
            onChange={handleChange}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Please enter the course starting date"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="comments" className="form-label">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            className="form-control"
            rows="3"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Additional comments"
          />
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="Active"
            name="Active"
            checked={formData.Active}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="Active">
            Keep me signed in
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
