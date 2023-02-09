import { theme } from "../../../1-App/mui/WithTheme";
import { Scrollbars } from "react-custom-scrollbars";

//Кастомный скролбар, для компонентов с прокруткой
//Подстраивается под размер родителя
const CustomScrollBar = ({ children }) => {
  return (
    <Scrollbars
      style={{ width: "100%", height: "100%"}}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme.palette.secondary.dark,
            position: "relative",
            zIndex: 10,
            opacity: "0.7",
          }}
        />
      )}
    >
      <div style={{padding: '0 24px 12px 0'}}>
      {children}
      </div>
    </Scrollbars>
  );
};

export default CustomScrollBar;
