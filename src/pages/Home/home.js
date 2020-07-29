import React from "react"
import Container from '@material-ui/core/Container';
import { Grid, Paper, Box, Typography } from "@material-ui/core";
import "./style.css";

function Home() {
    return (
        <Grid container={true} spacing={2}>
            <Grid item xs={12} >
                <Paper elevation={5}>
                    <Box className="centerItem" p={2}>
                        <img src="/pic/allproducts.jpg" alt="products" className="imgSizeS" />
                    </Box>

                    <Box p={2}>
                        <h2>
                            สุดยอดนวัตกรรมใหม่แห่ง ผลิตภัณฑ์เสริมอาหาร ล้างสารพิษ ดีท๊อคซ์ร่างกาย ด้วย..ผลไม้
                       </h2>
                        <p>
                            อุดมไปด้วยใยอาหาร และสารประกอบจากธรรมชาติอย่างลงตัว ปราศจากผลข้างเคียง ช่วยลดอาการท้องผูก ปราศจากผลข้างเคียง
                            ช่วยลดอาการท้องผูก ชำระล้างสารพิษในลำไส้ ให้ระบบทางเดินอาหารสะอาด ไม่มีตะกอนของเสียตกค้าง ช่วยให้ลำไส้แข็งแรง
                            ส่งผลให้สุขภาพร่างกายแข็งแรง กระฉับกระเฉง ทำให้ร่างกายเผาผลาญอาหาร และไขมันส่วนเกินได้อย่างสมบูรณ์ และมีประสิทธิภาพดียิ่งขึ้น
                            ผ่านการตรวจสอบจากองค์การอาหารและยา ขึ้นทะเบียน เลขที่ 13-1-01760-5-0076 และได้รับการรับรองคุณภาพสากล GMP,
                            HACCP สำหรับการผลิต ผลิตภัณฑ์เสริมอาหารจาก บริติช สแตนดาร์ด อินสทิทิวชั่น
                        </p>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4} >
                <Box mx={0}>
                    <img src="/pic/boom-fib.jpg" alt="boom-fib" className="imgSizeL" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4} >
                <Box p={2} >
                    <h3>Room Fiberry หอมอร่อย ดื่มง่าย ชงง่าย</h3>
                    <p>ชงดื่มแล้วสบายท้อง ร่างกายผ่อนคลาย หลับสบาย</p>
                    <p>ชงง่าย ดื่มง่าย รสชาติมิกซ์เบอรี่ หอม อร่อย ทานง่าย</p>
                    <p>สวยกระจ่างใส จากภายใน มีสารสกัดจากธรรมชาติ นานาชนิด ช่วยให้ผิวพรรณสดใสยิ่งขึ้น</p>
                </Box>
            </Grid>
            <Grid item xs={12} md={4} >
                <Box>
                    <img src="/pic/boom-fib2.jpg" alt="boom-fib2" className="imgSizeL" />
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Paper elevation={5}>
                    <Box className="centerItem" p={2} >
                        <img src="/pic/cfMain.jpg" alt="boom-cf" className="imgSizeS" />
                    </Box>
                    <Box p={2} >
                        <h3>Room coffee</h3>
                        <h4>Sucralose</h4>
                        <p>เหมาะสำหรับผู้ที่ใส่ใจ
                        ในการควบคุมระดับน้ำตาลในเลือด <br />
                        *SUCRALOSE คือ… สารให้ความหวานที่ไม่ให้พลังงาน ไม่กระทบต่อระดับฮอร์โมนอินซูลินในร่างกาย ไม่เพิ่มระดับน้ำตาลในเลือด
                        </p>

                        <h4>Non-dairy creamer rice brand oil</h4>
                        <p>เราเลือกใช้ครีมเทียมน้ำมันรำข้าว แทนครีมเทียมทั่วไป เพื่อช่วยให้คนรักสุขภาพ เพลิดเพลินกับเครื่องดื่มที่โปรดปราน โดยไม่ต้องกังวล 0% คอเลสเตอรอล 0% ไขมันทรานส์</p>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box >
                    <img src="/pic/cf1.jpg" alt="boomcf1" className="imgSizeL" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box >
                    <img src="/pic/cf2.jpg" alt="boomcf2" className="imgSizeL" />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box >
                    <img src="/pic/cf3.jpg" alt="boomcf3" className="imgSizeL" />
                </Box>
            </Grid>

            <Grid item xd={12}>
                <Paper elevation={5}>
                    <Box className="centerItem" p={2} >
                        <img src="/pic/boom-collagen.jpg" alt="boomclg1" className="imgSizeS" />
                    </Box>
                    <Box p={2}>
                        <h3>Boom Collagen Plus</h3>
                        <p>ผลิตภัณฑ์อาหารเสริมที่ช่วยดูแลสุขภาพผิว ผม เล็บ อย่างครบวงจร ให้คุณดูดีจากภายในสู่ภายนอก ด้วยคุณประโยชน์จากสารสกัดที่มีมากถึง 36 ชนิด นำเข้าจากต่างประเทศจากทั่วทุกมุมโลก</p>
                        <h4>ผิวบูมได้ทุกวัน</h4>
                        <p>เพื่อให้ทุกวันของคุณเป็นวันที่พร้อม เปล่งประกาย เพียงแค่ดื่ม BOOM วันละ 1 ซอง ก่อนเข้านอนเท่านั้น ผิวของคุณก็จะค่อยๆดูดีขึ้น มีชีวิตชีวาขึ้น</p>
                        <h4>ผลิตภัณฑ์เสริมอาหาร Boom Collagen Plus</h4>
                        <p>ช่วยในการดูแลสุขภาพผิวให้แข็งแรงจากภายใน สู่ความสวยใสเปล่งประกาย สู่ผิวพรรณภายนอก ผ่านการตรวจสอบจากองค์การอาหารและยา ขึ้นทะเบียน เลขที่ 13-1-01760-5-0104</p>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home;