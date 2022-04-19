export function formatDate(date) {
    let formatDate = new Date(date);
    return (
      formatDate.getDate() +
      "/" +
      (formatDate.getMonth() + 1) +
      "/" +
      formatDate.getFullYear()
    );
  }