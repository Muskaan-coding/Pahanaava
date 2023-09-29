module.exports.home = (req, res) => {
    res.render('home-list', {
        title: 'Welcome to ᑭᗩᕼᗩᑎᗩᗩᐯᗩ-Best fashion at low price!!',
        pageHeader: {
            title: 'Welcome to ᑭᗩᕼᗩᑎᗩᗩᐯᗩ',
            strapline: 'Best fashion at low price!!'
        },
        Heading2: 'Select your Style',
        categories: [{
            name: 'Western Style',
            href: '/style1'
        }, {
            name: 'Indian Style',
            href: '/style2'
        }, {
            name: 'Indo Western Style',
            href: '/style3'
        }, {
            name: 'Casual Style',
            href: '/style4'
        }, {
            name: 'Street Style',
            href: '/style5'
        }],
        Heading3: 'We search best fashion at low price from all fashion platforms'
    });
};

module.exports.styleinfo1=(req,res)=>{
    res.render('west',{
        title:'Western Style',
        contents:[{
            imghref:'https://images.meesho.com/images/products/283965203/egmyz_512.webp',
            prod_name:'White Crop Cami Tank Top For Women',
            price:'   ₹87 (onward)',
            href:'https://www.meesho.com/white-crop-cami-tank-top-for-women/p/4p2cyb'
        },{
            imghref:'https://images.meesho.com/images/products/291512492/uzxcb_400.webp',
            prod_name:'WOMENS PREMIUM COTTON BLEND TSHIRT',
            price:'   ₹131 (onward)',
            href:'https://www.meesho.com/womens-premium-cotton-blend-tshirt/p/4tk4h8'
        },{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230624/Ui6H/6496c13deebac147fcfd453e/-473Wx593H-465343289-black-MODEL5.jpg',
            prod_name:'High-Rise Bootcut Jeans',
            price:'   ₹700',
            href:'https://www.ajio.com/kotty-high-rise-bootcut-jeans/p/465343289_black'
        },{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20221114/BUDL/63726f64aeb269659c8c2552/-473Wx593H-469194079-iceblue-MODEL.jpg',
            prod_name:'Mid Rise Flared Jeans with Frayed Hem',
            price:'   ₹540',
            href:'https://www.ajio.com/buda-jeans-co-mid-rise-flared-jeans-with-frayed-hem/p/469194079_iceblue'
        },{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230629/sf0G/649cb21fa9b42d15c91728f3/-473Wx593H-465969611-red-MODEL.jpg',
            prod_name:'Fit & Flare Dress with Back Cutout',
            price:'   ₹882',
            href:'https://www.ajio.com/aask-fit--flare-dress-with-back-cutout/p/465969611_red'
        }
    ]
    });
};
module.exports.styleinfo2=(req,res)=>{
    res.render('indi',{
        title:'Indian Style',
        contents:[{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230720/wIpF/64b95f76eebac147fc7f3977/-473Wx593H-466373998-yellow-MODEL2.jpg',
            prod_name:'Contrast Border Saree with Woven Motifs',
            price:'   ₹699',
            href:'https://www.ajio.com/saree-mall-contrast-border-saree-with-woven-motifs-/p/466373998_yellow'
        },{
            imghref:'https://images.meesho.com/images/products/246204307/gcqbg_512.webp',
            prod_name:" Women's Rayon Printed Anarkali Kurti with Pant and Dupatta Set",
            price:'₹602',
            href:'https://www.meesho.com/womens-rayon-printed-anarkali-kurti-with-pant-and-dupatta-set/p/42l0gj'
        },{
            imghref:'https://images.meesho.com/images/products/240591384/vvcid_512.webp',
            prod_name:'rendzy Fancy Bollywood net Lahenga Choli',
            price:'₹623',
            href:'https://www.meesho.com/trendzy-fancy-bollywood-net-lahenga-choli/p/3z8pi0'
        }
    ]
    });
};
module.exports.styleinfo3=(req,res)=>{
    res.render('indowest',{
        title:'Indo Western Style',
        contents:[{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230623/Ffc9/6495d1bba9b42d15c9cb261b/-473Wx593H-466302538-blue-MODEL.jpg',
            prod_name:'Floral Print Georgette Fit & Flare Dress',
            price:'   ₹950',
            href:'https://www.ajio.com/fashion-2-wear-floral-print-georgette-fit--flare-dress/p/466302538_blue'
        },{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230616/aF6U/648c8fff42f9e729d7489dea/-473Wx593H-466281600-green-MODEL.jpg',
            prod_name:"Leaf Print Print Palazzos with Elasticated Waist",
            price:'   ₹320',
            href:'https://www.ajio.com/wuxi-leaf-print-palazzos-with-elasticated-waist-/p/466281600_green'
        },{
            imghref:'https://images.meesho.com/images/products/196876820/cxagl_512.webp',
            prod_name:'Classy Feminine Women Dresses',
            price:'   ₹620',
            href:'https://www.meesho.com/classy-feminine-women-dresses/p/397r4k'
        }
    ]
    });
};
module.exports.styleinfo4=(req,res)=>{
    res.render('casual',{
        title:'Casual Style',
        contents:[{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230628/Fqvr/649b521beebac147fc0f9f73/-473Wx593H-465629043-pink-MODEL2.jpg',
            prod_name:'Printed Blazer & Wide Leg Pants Set',
            price:'   ₹858',
            href:'https://www.ajio.com/pannkh-printed-blazer--wide-leg-pants-set/p/465629043_pink'
        },{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230628/uVZU/649bbaa8eebac147fc1e409d/-473Wx593H-465922011-white-MODEL.jpg',
            prod_name:"High-Rise Relaxed Fit Pants",
            price:'   ₹390',
            href:'https://www.ajio.com/visit-wear-high-rise-relaxed-fit-pants/p/465922011_white'
        },{
            imghref:'https://images.meesho.com/images/products/181100214/7o4q6_512.webp',
            prod_name:'SAKSHI TRADER Stylish Embellised Blazer',
            price:'   ₹475',
            href:'https://www.meesho.com/sakshi-trader-stylish-embellised-blazer/p/2ztlti'
        }
    ]
    });
};
module.exports.styleinfo5=(req,res)=>{
    res.render('street',{
        title:'Street Style',
        contents:[{
            imghref:'https://assets.ajio.com/medias/sys_master/root/20230609/jk9v/648354d742f9e729d735e3c1/-473Wx593H-442249880-black-MODEL.jpg',
            prod_name:'Oversized Crop Graphic T-Shirt',
            price:'   ₹599',
            href:'https://www.ajio.com/outryt-oversized-crop-graphic-t-shirt/p/442249880_black'
        },{
            imghref:'https://images.meesho.com/images/products/292264041/t7lmb_512.webp',
            prod_name:"Printed Latest Stylish best trendy Casual cotton oversized t shirt for women",
            price:'  ₹228',
            href:'https://www.meesho.com/printed-latest-stylish-best-trendy-casual-cotton-oversized-t-shirt-for-women/p/4u08dl'
        },{
            imghref:'https://images.meesho.com/images/products/270026664/4zwh0_512.webp',
            prod_name:'2 Piece Set, Top And Bottom Set',
            price:'   ₹893',
            href:'https://www.meesho.com/2-piece-set-co-ord-set-over-size-co-ord-set-top-and-bottom-set-matching-set-matching-top-and-bottom-set-printed-co-ord-set-coord-set-for-women-crop-top-and-wide-le-pant-set/p/4grlwo'
        }
    ]
    });
};