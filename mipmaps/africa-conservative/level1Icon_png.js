/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 150,
    "height": 196,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 75,
    "height": 98,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABiCAYAAAAY7S4UAAAAAklEQVR4AewaftIAABEkSURBVO3BeXBc9WHA8e/b99v7llary7plyZLvA/nEgAFjYhxzOS2UowkBJ5lMcxCnE5wJmKY07R+5cNI2HQjQNCUYQiwgXAkGG2N8go0t2Zas27qllVarvd++SgNqNR5Z0kpayZPq82HWrFmzZs2aNWvWrFmzZs2aNWvWrFmz/t+TmH5rgauATD7VA7wPvMcVTiLx0oFv6rXyWotRu0DWSHaNRkIjSQxSVVBiMUIRpbW3P/wa8HUgyBVIInGWyxppl8Oiv1YnZLOQJcYSVVT6g5E6rz+8A3iRK4zE1EuXNdLPHBb9FqNOGCSJuPUFIp09vtBXgRe5gshMrW/YTLr/TLYaVuq0spAkJkSvlU2SxLWhiPJHoIMrhMwUkeBnyTbDTqtRa5MkibHEVFBiKtGYSiymMkgjSQzRCdkcDEcXKzH111whBFNAgl+kOE1f0wsNl6OqEI4qOGxWVi3IpyDLjU7I6LQCJRYjGI5S19zJO0crCYVCCFnCbtav6+gNbAP2cAWQmLztKXbjboNOFowgpqpIGsEdG1ZQnJNKptvBaMIRhTMXmvm3l/YhZOjoCewPRZRruALITJLFqH3GatSmMYJgWOH268v48q3rKcpxYzMbGIssa0h32Vm9qJAPT9ehRKOuQDj6r0CQGaZhcq4y6sQCRiALHY88sIWbVpdiMmiJl8th5rv3bSKiqGbgC1wBNEzOZiFruFRYgUe+tJn8TBfxamjtpqapk3BEITXJylfuuIYBW7kCaJicNUKWGC6ixPjqndeRmmQlHt7+IM+/eYz+QJiIovDawU9o7fKyojSXFIcliyuAYIpZLRYWFc4hXmaDnts3LEWnlRlUnJOKoqjIssSW9YsLny4/yEwTTLFrlxUjyxLDebx+Pj7fSGuXl/n5GSyam8mlZFlClmWGk2WJQbkZLgOwCDjFDBJMzgUlpt4oaySGzHE7Ga6l08vxs/VsWDEPk0HLeJy+0My+Y+d48LarMegERr2WAVcBp5hBGibnuBJTGa6upZPhmjt6uGXdQkwGLeMVVWL86UglJ842MMjttDJgLTNMw+S8E4upDHfiXAPDLS/JZkhbdx8er5+xpCXZGHSisp5BDquR3PTkHGaYhsmpCUaiFQzT3NZFMBxlJLt/t4+/f/L3ePuDjCbNZePhezYyNzuVIWsXF85hhmmYJJ8/ckZV+V8ajUR7t5eRpDgttHV7+aT6IpejKCp9/SHWLy3kptWlDMnPdBUB6cwgDZOkwpOhqMIQjSTh7Q8ykmuXFzPoo7MNjKSprYff7/uIitpm3jxUwXAWk4EBNzGDBJN3wBeInDBo5WUM0GgkFCXGSObnZ/DgrVeT7DBzKW9/kCMVtWy7YRmDapo6CUcUdFqZQZkpDgbcDDzDDBFMgUAo+p4/GF1m1As0EqgqI5JliVuuXshIhCyzafUChuTPcTGc1awnP9PlrrnYyUwRTN73v/fFm7+V4XLw1odnOHTyPHqdIF4mg5axLJ6bZam52MlMEUzesiVFWRh0gi9uWcv1ZSVkpyYxGYqicuFiB0XZboZr6vAEmEGCyfvvU1VNW8rm5wpZlsjLSCYeNRc78flDIAEqdPX6aPf0sXJ+HsMFw1E+qbrYxQySmbyKYxX1efMLMpamOCzEy2kzodFosJoMWE0G5hdksKAgA4fVxHDnG9p589CZfwROMUNkpkBUUfYePFk9tyg7bVFqso1B7d0+zEYd42E26jAbdZiNOi7nlf2nqs7Vtz7IDJKZIlEl9vt9x84ZHBbjwsY2j9jz5+NVJXnpLotJz2RV1Lbyiz37fgrsZwZJTL10wAg0pyfbn//+A5u3zkl1MFE+f4h/eub1o6cvNJcxw2Smng/wAFFfIPT8R+caFi0pyi6xWQzES1FUXnrnROu+4+duBzqYYTIJ5vOHXjhxtn7N6oUFBSaDjniU7z/Z/19vHN4OvMcVQGYa+AKh16JKbNvSomynRiMxHm8fruz/1csHHgF+zRRSVXXdY4891r5r164ocRJMD88fD36ya2lx1lNl83MFY6hp6mT3C/v+Bfg5U0RV1W0XvC0Pl1ftX/n5ueufAHYSJ8H0eW7Pn449tKQoa61OKzMavV7LgEygBKhkElRV3XbB2/LwUyf/sHJH5Qt4YmHe0pu2ATuJk0TiGIANwN0mkykrPz+/0GAwZNxWNocFBRmMpq27j92vnCQQCLA929T7cVtPzbv1Hd1Nff4jwF7gMGNQVXXbGU/Dwx82nFi5o/IFPLEwQ76esYYnr/32o5IkPU4cBFPHANxvEvKmG/LTMjfkuEuTjDpzts3Ex209vIYLk8nEG4erKcxyY9AJLqe5owe3243f72fNHKP95oKMpd9bA/W9/de39ge/V+3pa3ruVF11U1/gOeDXDKOq6lePd1Td/+Ojv1m5s7qcoBrjUrubP+C+9s33AI8TB4mpce+XFuX9w435aTlzkywYhWC4sKLw+OEawjnFKIqC0tvC7dcsICPFzqU6e/rZvfc42XkFtLS08MsFdoxCcKmwonCm08vPj57/4Ehz91oGdAX79j5z6g+f31ldTlCNMZof5NzIrrXbH5Uk6XHGScPk3fCdVcVPfnNlUc4itwOjEFxKJ8t8Z3kOmsYLDDK4snlmXzVPvnCAY5UNVNa2cr6hncOn6/hF+QkysnKIRCJcRR9GIRiJTpZZmurku6vnrQF+wIAkvaX6w67zBNUYY3m8/m2Otp+7hzhomKSyjKQf/nVptl2WNIzGodfx6Iosirtr6erqwu12Y07L53hzjDfPeHj14w5OtMTIys0nEokg1Z/n7pIMxlKSbOfaHPctfGrn/UWbGhmnV6venauq6g8YJw2TU3r/orzlRiEYD6MQPLQknx0ZEkWd1bTU19PT00M0GiUWi+H1emmvqWaj0sYPV+Xj0OsYjzuK5ywE0iVJCm7OX/PmtqRSxuPx+rf5sK3yLsZJZnIe/cZVRatsei3xSDbqWZrq4NZMK6stsNQQpcysssWt5678ZOYmWZE1GsYrEFXEnsrGZuDQY4899n6S1vLAc40HTYxDZky43n3qlfZdu3YdYwwaJmGx2zF/jtXEZKSYDBQl2ShJtpFiMjARhU4LyUbdzQyQJMlzfc5Ve7cllTKW5UYXC5MLgsA8xkEwCdfnpuZyBdDJMjcVpLl/e7qBz+zYXrJl656DFS5GsNzo4pHSLwSvyyv7s1NneVSSpOOMg2Di8ktTbLlcIVZlJBf99nSDE/BIkuRRVXXvtsrSB/Z0VzBkudHFI6VfCF6XV/Znp87yqCRJx4mDYOI2WHSCmRCIRukNRUgzGxniNOgMwNVAOZ/acX/hxq17jlS4lptSebh4a+/G/NVvJ+utP5Ik6TgTIJi4G/MdFmaCLEmc7+4jzWxkSJbNxIBbgXIGSJLk6Qv7974p77hzXdaS101Cv1OSpBomQTBBm/LT5pi1gpmgk2Wqunysz3IzJMVkoDjJmnOuu48hFq1xx8a8lU9IklTDFBBM0JJUp5sZ5I9GudSmgvSMc919DJEkyQN4mCIaJsaZ4zAVMopmX4CwopAoKSY9lypKshQCThJEw8SstmgFo/mkvQedLJMoOXYzihpjOIdBJ4CrSRANE1PmNOgYTYsvQCJpJIkOf4jhMq1GBtxKgggmZk2m1cho+qMKiWQUMp5ghDSzkSEpJgPFSda8c919jMNW4O6i7NQUrZDxBUKx+pauvwMquAzBBFyX4zboZJnRyEgkkkkr4wtHGaKoMT682EVfTMpidPduWj3/4auXzl2cn5mCyaDF4/Xz+gen6+tbuoyMQjABGklKDUSjGIXgchwGLYlk0QkONnUSVBSavAHe7AEfGmxud8GyBblH2zzewNEzda3Az4x63f33fm7VlhSnxaUoMcrm5wlZlhh08nwTv3zxvVdbu3ofAloYhSB+hg5bav7Oow1sL3JRnGxjJNGYSiIlGXT8KWTiVDQZrV1LqLeWv91QTMGcFAasYIDPH+KJZ17fuP229fac9CSGUxSV194/1flU+cGfAE8wDoL4ZQAhQ/488dMOD4az1dySacWmFxiFTH8kyketPfyuoqH3rvnZdlnSkAg6WUYIgV6vp7Gxge2bl5CWbGO42uYu3E6rPSc9iUtV1LbwVPnBrwF7GCdB/GpMMV9jXV3tvNzcPHA6eUtRCPgDRKNR9Hor/Xod7f6q55u8ge05djOJEupo5YLPy6Zl2aQl2xiu9mIngVCYv9m0kpHotYIBGwAXsBl4H/gRoxDEL/26FcXzctKTefaNj9DZXNhsNiwWC9FolL6+PhobG88Df/QEw9tz7GYSZdm8dFJSHCyeO4dLHfi4mvs2r+JynDYTD9129VdMBh1rFxfy7GuHCl89cOpHjEIQv5scVhPpLhs77lpPVWM7nb0+evr86M2C3a/t/w3wIJAVjCokktQfoDoYZu3iAi7ltJkYSc3FTjp6fPj6g9S3dvO1O68hGI5yrKKunjEI4ndzZoqDQbIsMS83FUhlUEVNCwP2AEGgSiWxYkoMp9NGPOwWIwa9lgyXHX8ozKDK2hZau7y7GYMgTvNy01KtZj0j8QfDDDjAZ5q8/jYySSVB0iQVrcvOSDxeP4O6e/2UHzhJltvJ9WXzSLabGeIPhPufLv+gurqxrRp4hTEI4rSiJDeVy2ju7KkGPHxGaDQhEkiNxahv7WZFaQ7D+YMRoopCTVMnFbUt3H1TGZ9UX+TE2UZefOd43db1i3NB4uV3P34+EAp/mXESxMlpM5q4jNrmrg6GafYFvCRQpsXIc4cr2pcUZbltZgP9gTAXOzzB37197IP6lq5H3zpcec/Nq+ffo9PK5pK8dO7a+R+HgWvPXGjOAGSgijgI4vOd/Seq7L2+IOFIlNRkG6sW5GMyaBlU09ThZ5hAVAmSQCatTEtn77xv/+SFLwLpQA/wMlDBgEAw/L7LYdkI5PGpTiAI1DABgvFJX1iY+dLdm1auLs1LY0hPX4BTVU3UtXSRleqkrqUrxjTSSAxKA37MZfzq5QMvN7R2r+sPhqPAT5kEwdjSb1xZ+s49N6+c57AaGc5hNbJqYR6rFubR1NaD3WIUvb4AQ+p7+/tJIAmJAWZG9/Abh84wFTSMoTgn9Tf3bV41z2TQca6+jerGDob4/CGOVdTz0blGXE4L65YUrgaW8xlvKBIjgcw6wYASpolgDEKWu9/6sOL8KwdO1vT0Bf7gsBpv//dH7t3Y6fFxpKKWG8pKqGpsp/y9k6xbXGg4cbbhkZbO3i8DrlZfKEYCmYTMgAKmiWAMZ2qat52paWZIT1+gsK8/uDGiKNx+3VIG1TR1cseGZciyRLLdnDw3y31oQUFmwS9ffPckCWTRCQakMk0EE5SXkcygI2fqWF6SjSxLNHf00ucPLtp++3qnUa9jQAoJlGIyMKCAaaIhftU9fX4GVda1oigx8jNdePuD7P/oPD/51l85s9OSqG5sjwJNJFhxslXDNBHE79mnyw9+bm52atEbh053fvOuG9Ydr2zg1fdPnVxRmjv/TG2zaOvyBp8uP/groIQEs+qEhmkiiF+worZla0VtC4P++dk35vKpqhNnG/IBC9ABtABvkWA5drPxWIuH6SCYvCr+Tw3DLHLbBQlm02sF00RDAlm0QvAXREMClaTYnfwF0ZA4hoUp9jwSSFFj9EeiTBdB4mz3BMPmQDSKUQimSlhRqPL4ONvp7X/pbNPxk+09TzNNJBLHANxpEvIdN+SnZa7PchUlGXV2p0FHqtmAXa9jLIFolFZfEE8wTFcgHD3Z1nP2laqLjZ2B8F7gBcDDNJKYXiuB1cAKo5Dd81NsYo7VZHAadVo+E1FinO3y9nlDkdj5bp8XOAUcAd4Bgsyg/wF4Wjp1abX87gAAAABJRU5ErkJggg=="
  },
  {
    "width": 38,
    "height": 49,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 19,
    "height": 25,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAklEQVR4AewaftIAAANDSURBVO3BfWiUdQAH8O/v9/ye57l77rm32Xa729y5uZsDY2dFTDdIkApFZxkGRYTEkqDwj6iIzCUEGUllLxIOGoEJ0/5J09AUhNVMGiXiXGJbvjQb2nbey/Oct+e9++MBb09bR//3+eB//xnBAoIS/4xf4Dot25nOFLR3ANiogsAjJPGbAyK/k1IsBwGBA1i28+PNbKkbVTDMFQr4+L11NeHY5ocfRDJeA8ZxGP/jr673v/zuZaWk78G/oJirh1LEeh9/CKmmOsh+ETzj0NywCDue37AaVVDMdclxYAUDIjTdhGHZEHgOU9N51EbkBKqgmOuc4+BKXinBJzJk8ipmNQOJ2ggY45pQBYXH9t6NfGxRCD6BR0NtBLphgVICSsCjCgqPX69Mbb+VUU7qhmmgLCT7IPtFzOSKZ1AFB4+fL12/eOLs2IEH2pOt90TkNCHATE6dePG9wU0AinAdunh8x/qtT6480n/wDFwEHoOPrdybCEprLuSNpLokLiVjQQyP/omnBb1g2s61bNfGz0+2KNuG87+lusOpq/3rdrbAxaFCKiKv2Xr/0o/CPiG2ROZ5mlUxM3kbnYKD+oAoBgQWK41f4MfSyfoTd6bCBS0XHdzdbx74ZOAHlDFUeL2rfZ3EM4YyQgjaQgLacJduWZB41tpVv+Iry7Gf6q5f8fWjLas+hYuhQkL2t6NMtywIHAcvVTfBUxr/7IVdu0dGRvoIIaVe3MWhwnPplleDAh/PzhqQeAYvxTAxazns6MR1jA4dWbxlw6q30m2Na4fPTxxGGUOF/Rkr3HFHh2SWcqslMQIPCxQjNVG8saX5NQCOYZmKppsfw0VR4ZHu1mh4edwqFNV9mAcjDhprZWiGAc0wyc2MIjTFoo1wMbjefWnTh5puhjXDUsdmCjd6UvgHH6W4fO3Wnt9vTJ+/d2ni2b593zwBQIGLwTWr6QHbdhTDsMJ2Q6wH8xAZxa6B46cBHDt0CvvhwcE1dG782H1tixs13bgtS36jg8MyeHCU4mpO/X4iq/6CeTBUeHvg220oe6Vz2ZtOR3MPIQSVirppRH2CjgUwzOODny5/IfFUT9dF20WOkyzHMScLxcm+odGjOc08iwX8DeTuNxzjnnjNAAAAAElFTkSuQmCC"
  },
  {
    "width": 10,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAAAklEQVR4AewaftIAAAFWSURBVK3BzSuDcQAH8O/z+z3PnudhY+zJXjRN3oWQ2ywpNw4rFxfl4MiVm2QluVis5LADyR+AUi5KUU6T7bDUysvYLIul2Ox58autaGefD/4dhzKHVV4gBJOGgVTq7cuPCjxK+r2DnYEJX6/J0IH4fXpufe80hD8ISjIel02lhIBSgu5m5yAqEJQ8tzfZbyxVki6LAjRNL6ICRdl8Y31L0qAdeQO0/T6ZcARmezqmvcuRg/NdMBRMcKzf39dQt2XP582W9w/BJgl9mkkQr6oLntBq8Hp/M3zHg+lSaoZVXedknkLmCT6LKpTLmDZiV9bODlcUMARMxKa4LlTyiDIdQLLV7bOa5Q2zZFLA8GAs1WJbTtdeoX27wYiEIBJ/mHEqtfzSzlEYDA/mJZsLqIXiqCHTAY7jQDhOT0cTme3bpxOUcfhlCY8PTSmyZItnc7HFs+gx/vgB40FsfruDLo8AAAAASUVORK5CYII="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;