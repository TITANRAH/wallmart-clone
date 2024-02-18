interface Props {
  searchParams: {
    q: string;
  };
}

function SearchPage(props: Props) {


  const {
    searchParams: { q },
  } = props;

  console.log({q});
  
  return <div>SearchPage</div>;
}

export default SearchPage;
