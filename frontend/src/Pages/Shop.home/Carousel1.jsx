import MyCarousel from "../../Components/Carousel";
import styled from "styled-components";
const StyledHeading = styled.h1`
  margin: 40px;
  text-align: left;
  color:white
`;
const DIV = styled.div`
width: 80%;
margin: 0 auto;
  
`;

const Carousel1=()=>{
    const images = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec13d72e-df61-43ed-9eaa-b2171bb9ec13/dfztzkf-96d42834-229d-4374-b8bb-3595a4f37e79.jpg/v1/fill/w_894,h_894,q_75,strp/adopt_368_by_xxbunnyberryxx_dfztzkf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk0IiwicGF0aCI6IlwvZlwvZWMxM2Q3MmUtZGY2MS00M2VkLTllYWEtYjIxNzFiYjllYzEzXC9kZnp0emtmLTk2ZDQyODM0LTIyOWQtNDM3NC1iOGJiLTM1OTVhNGYzN2U3OS5qcGciLCJ3aWR0aCI6Ijw9ODk0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DcYn7c_QUbNYc_bvgSmL8eJ2HAtt3rWAhlyW41zLoVI',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ba6b55d-1f73-4c42-a1a8-bd26dd509434/dfzqwes-2468e103-07a1-4524-994c-eb441c200fb8.png/v1/fill/w_894,h_894,q_70,strp/adoptable___ai_adopt_333_by_umbralshop_dfzqwes-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViYTZiNTVkLTFmNzMtNGM0Mi1hMWE4LWJkMjZkZDUwOTQzNFwvZGZ6cXdlcy0yNDY4ZTEwMy0wN2ExLTQ1MjQtOTk0Yy1lYjQ0MWMyMDBmYjgucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzViYTZiNTVkLTFmNzMtNGM0Mi1hMWE4LWJkMjZkZDUwOTQzNFwvdW1icmFsc2hvcC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.MJvGKazNavFBw_pdnJ4ewAxlOd5-qGxkk_-QS_wRdlc',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39bbd97c-d27b-4e04-ac42-65e5580188c1/dfzv87t-a008ea8a-c065-471f-b4eb-c0dd7feb8e79.png/v1/fill/w_894,h_894,q_70,strp/_open__adoptable_premiumai_by_aipremium_dfzv87t-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5YmJkOTdjLWQyN2ItNGUwNC1hYzQyLTY1ZTU1ODAxODhjMVwvZGZ6djg3dC1hMDA4ZWE4YS1jMDY1LTQ3MWYtYjRlYi1jMGRkN2ZlYjhlNzkucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzM5YmJkOTdjLWQyN2ItNGUwNC1hYzQyLTY1ZTU1ODAxODhjMVwvYWlwcmVtaXVtLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.35GU6cPEeRq6rINMDuqw5r6XmNuvEaePLK3PKEO8vRs',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc47d5f0-ab7f-4cc0-8dde-e84837563003/dfzqj6l-b568968f-109d-47a6-b9bc-555f6408f801.png/v1/fill/w_894,h_894,q_70,strp/open_cheap_ai_adopt__10_by_manjuadopts_dfzqj6l-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2ZjNDdkNWYwLWFiN2YtNGNjMC04ZGRlLWU4NDgzNzU2MzAwM1wvZGZ6cWo2bC1iNTY4OTY4Zi0xMDlkLTQ3YTYtYjliYy01NTVmNjQwOGY4MDEucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cOT4qCI3KKT1TAN9mBXl2UcX1BGiF-bTYF0SwsK1Xhg',
    '',
    '',
    '',
    '',
    '',
    '',
    
    
    
    
    ];

    return <>
    <DIV>

    <StyledHeading>Adoptables beyond imagination  </StyledHeading>
    <hr  style={{color:"white",border:"2px solid white",marginTop:"10px"}}  ></hr>
     <MyCarousel images={images} />
     <hr  style={{color:"white",border:"2px solid white"}}  ></hr>
     <StyledHeading>Discover downloadable content
</StyledHeading>
<hr  style={{color:"white",border:"2px solid white"}}  ></hr>
<MyCarousel images={images} />
<hr  style={{color:"white",border:"2px solid white"}}  ></hr>
<StyledHeading>Commission custom creations</StyledHeading>

<MyCarousel images={images} />
<hr  style={{color:"white",border:"2px solid white"}}  ></hr>
</DIV>
    </>
}


export default Carousel1