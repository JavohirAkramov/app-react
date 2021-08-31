import LoadingMini from './../../../assets/images/LoadingMini.png';


const Preloader = () => {
  return <div>
    <img src={LoadingMini}/>
    <i className="fa fa-cog fa-spin" />
  </div>
};

export default Preloader;
