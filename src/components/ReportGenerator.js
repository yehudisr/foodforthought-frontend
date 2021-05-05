import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";


const generatePDF = foodListings => {
    console.log(foodListings)
 
  const doc = new jsPDF();


  const tableColumn = ["Id", "Name", "Description", "Amount"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  foodListings.forEach(listing => {
    const listingData = [
      listing.id,
      listing.name,
      listing.description,
      listing.amount,
    
    //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
  
    tableRows.push(listingData);
  });



  doc.autoTable(tableColumn, tableRows, { startY: 20 });
//   const date = Date().split(" ");
//   // we use a date string to generate our filename.
//   const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
//   // ticket title. and margin-top + margin-left
  doc.text(`Food Donations within the last month`, 14, 15);
  // we define the name of our PDF file.
  doc.save(`report.pdf`);
};

export default generatePDF;