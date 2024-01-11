import React from "react";
import { useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const BookTableBlock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="book-table-left-block"></div>
      <div className="book-table-right-block">
        <h2>Reserve Your Table Online</h2>
        <div className="contact-section">
          <form>
            <div className="name-email">
              <div className="input-field">
                <input
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                />
                {errors.lastName && <p>Name is required.</p>}
              </div>
              <div className="input-field">
                <input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                />
                {errors.lastName && <p>Email is required.</p>}
              </div>
            </div>
            <div className="date-people">
              <div className="input-field">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </div>
              <div className="input-field">
                <select>
                  <option selected>Nuber of People</option>
                  <option>People-1</option>
                  <option>People-2</option>
                  <option>People-3</option>
                  <option>People-4</option>
                </select>
              </div>
            </div>
            <div className="input-field-text">
              <textarea placeholder=" Special Request"></textarea>
            </div>
            <div className="check-availabilit-btn">
              <button>Check Availability</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookTableBlock;
