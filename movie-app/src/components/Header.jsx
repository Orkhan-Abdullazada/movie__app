import React, { useState } from "react";

function Header({setSearch}) {
  const [value,setValue]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSearch(value)
    setValue("")
  }
  return (
    <div className="Header">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="type" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Wishlist <i class="fa-solid fa-heart"></i> 0
        </button>

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">...</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
