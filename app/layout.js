import './globals.css'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";

import CentralData from "./Context";


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const Authentication = (props) => {
  const {children} = props;
return (
  <html lang="en">
      <body suppressHydrationWarning={true}>

        <CentralData>{children}</CentralData>

        
        
        
        </body>
    </html>

  
)
}

export default Authentication
