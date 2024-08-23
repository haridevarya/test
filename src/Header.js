import React from 'react'

import logo from './AFLLogoRed.png';

// import {Link} from 'react-router-dom';
import {Link} from 'react-scroll';



export default function Header() {

  return (

    <div>

        <header class="header-section">
             <div class="container">

                <div class="inner-header">

                    <div class="row">

                        <div class="col-lg-12 col-md-12" style={{textAlign:"left"}}>

                            <div class="logo">

                            



                                <a href="#">

                                

                                  <h3 style={{color:"#354F7E", marginBottom:"-30px",marginTop:"-40px"}}><img src={logo} style={{ marginRight:"20px"}} width="60px"/><span style={{marginTop:"-10px"}}>Aquatic Farms Limited</span></h3>

                                </a>

                            </div>

                        </div>

                      

                        <div style={{display:"none"}} class="col-lg-2 text-right col-md-2">

                            <ul class="nav-right">

                                <li class="heart-icon">

                                    <a href="#">

                                        <i class="icon_heart_alt"></i>

                                        <span>1</span>

                                    </a>

                                </li>

                                <li class="cart-icon">

                                    <a href="#">

                                        <i class="icon_bag_alt"></i>

                                        <span>3</span>

                                    </a>

                                    <div class="cart-hover">

                                        <div class="select-items">

                                            <table>

                                                <tbody>

                                                    <tr>

                                                        <td class="si-pic"><img src="assets/img/select-product-1.jpg" alt="" /></td>

                                                        <td class="si-text">

                                                            <div class="product-selected">

                                                                <p>$60.00 x 1</p>

                                                                <h6>Kabino Bedside Table</h6>

                                                            </div>

                                                        </td>

                                                        <td class="si-close">

                                                            <i class="ti-close"></i>

                                                        </td>

                                                    </tr>

                                                    <tr>

                                                        <td class="si-pic"><img src="assets/img/select-product-2.jpg" alt="" /></td>

                                                        <td class="si-text">

                                                            <div class="product-selected">

                                                                <p>$60.00 x 1</p>

                                                                <h6>Kabino Bedside Table</h6>

                                                            </div>

                                                        </td>

                                                        <td class="si-close">

                                                            <i class="ti-close"></i>

                                                        </td>

                                                    </tr>

                                                </tbody>

                                            </table>

                                        </div>

                                        <div class="select-total">

                                            <span>total:</span>

                                            <h5>$120.00</h5>

                                        </div>

                                        <div class="select-button">

                                            <a href="#" class="primary-btn view-card">VIEW CARD</a>

                                            <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>

                                        </div>

                                    </div>

                                </li>

                                <li class="cart-price">$150.00</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            <div class="nav-item" style={{backgroundColor:"#354F7E"}} >

                <div class="container">

                    

                    <nav class="nav-menu mobile-menu">

                        <ul style={{backgroundColor:"#354F7E"}} style={{padding:"0"}}>
                            
                            <li class="active" ><Link to= "/" ><span></span>H<span style = {{textTransform:"lowercase"}}>ome</span></Link></li>

                            <li ><Link smooth={true} to="about">A<span style = {{textTransform:"lowercase"}}>bout</span> U<span style = {{textTransform:"lowercase"}}>s</span></Link></li>

                            <li><Link smooth={true} to="vmg">O<span style = {{textTransform:"lowercase"}}>ur</span> O<span style = {{textTransform:"lowercase"}}>bjective</span></Link></li>

                            <li><Link smooth={true} to="directors">O<span style = {{textTransform:"lowercase"}}>ur</span> I<span style = {{textTransform:"lowercase"}}>nspiration</span></Link></li>

                            <li><Link smooth={true} to="cert">C<span style = {{textTransform:"lowercase"}}>ertifications</span></Link></li>
                            <li><Link >L<span style = {{textTransform:"lowercase"}}>ogin |</span> R<span style = {{textTransform:"lowercase"}}>egister</span></Link></li>

{/* 
                            <li><a href="#">Pages</a>

                                <ul class="dropdown">

                                    <li><a href="#">Blog Details</a></li>

                                    <li><a href="#">Shopping Cart</a></li>

                                    <li><a href="#">Checkout</a></li>

                                    <li><a href="#">Faq</a></li>

                                    <li><a href="#">Register</a></li>

                                    <li><a href="#">Login</a></li>

                                </ul>

                            </li> */}
                        </ul>

                    </nav>


                </div>

            </div>

        </header>

    </div>

  )

}