import axios from "axios";
import { baseUrl } from "..";

export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${baseUrl}/attendance`, formData);
    if (response.status === 201) {
      return response.data;
    }
    else {
      throw new Error("Failed to submit form");
    }
  }
  catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};