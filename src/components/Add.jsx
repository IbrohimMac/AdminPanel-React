import React from "react";

const Add = () => {
  function AddStudentForm({ onAdd }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !age) return;
      onAdd({ name, age: parseInt(age) });
      setName("");
      setAge("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    );
  }
};

export default Add;
