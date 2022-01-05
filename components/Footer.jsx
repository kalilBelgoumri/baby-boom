import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <>
      <div className="text-white w-screen h-screen flex items-center justify-center flex-col mb-5 bg-[#B538A8]">
        <p>Qui sommes-nous ?</p>
        <p>Mentions légale</p>
        <p>Qui sommes-nous ?</p>
        <p>Mentions légale</p>
        <p>Qui sommes-nous ?</p>
        <p>Mentions légale</p>
        <p>Qui sommes-nous ?</p>
        <p>Mentions légale</p>
        <div className="sociaux flex justify-evenly">
          <div className="flex">
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
