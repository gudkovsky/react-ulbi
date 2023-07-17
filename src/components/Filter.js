import React from "react";
import MyInput from "./UI/input/MyInput.js";
import MySelect from "./UI/select/MySelect.js";

export default function Filter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        defaultValue="Сортировка по"
        value={filter.sort}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}
