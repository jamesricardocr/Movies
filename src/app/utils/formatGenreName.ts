export const formatGenreName = (genreName: string) => {
    return genreName
      .toLowerCase() 
      .replace(/\s+/g, '-') 
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-') 
      .trim(); 
  };