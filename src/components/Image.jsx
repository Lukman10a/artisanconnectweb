// filepath: c:\Users\Abdulrauf Lukman\Desktop\LUXA\artisanconnectweb\src\components\Image\index.jsx
const Image = ({ src, alt, className, ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default Image;
