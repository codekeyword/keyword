(function () {
  const audio = document.querySelector("audio");
  let vid = document.getElementById("myVideo");
  vid.pause();
  console.log(audio);
  const title = document.getElementById("title");
  const ss8 = document.getElementById("ss8");
  const ss12 = document.getElementById("ss12");
  const ss18el = document.getElementById("ss18");
  const ss18con = document.getElementById("ss18-con");

  const ss20el = document.getElementById("ss20");
  const ss20con = document.getElementById("ss20-con");

  const ss22el = document.getElementById("ss22");
  const ss22con = document.getElementById("ss22-con");

  const ss24el = document.getElementById("ss24");
  const ss24con = document.getElementById("ss24-con");

  const ss25el = document.getElementById("ss25");
  const ss25con = document.getElementById("ss25-con");

  const ss26el = document.getElementById("ss26");
  const ss26con = document.getElementById("ss26-con");


  const ss30el = document.getElementById("ss30");
  const ss30con = document.getElementById("ss30-con");

  audio.addEventListener("play", (e) => {

    //setTimeout(()=>{
      audio.style.display="none";
      vid.play();
      console.log(e);
      title.classList.add("title");
      //ss16();
      setTimeout(() => {
        vid.play();
      }, 200);
      setTimeout(() => {
        const repo = document.getElementById("repo");
        title.remove();
        ss8.classList.replace("ss8-non", "ss8-dis");
        repo.classList.add("title");
        setTimeout(() => {
          const schema = document.getElementById("schema");
          repo.remove();
          schema.classList.add("title");
          setTimeout(() => {
            const meta = document.getElementById("meta");
            schema.remove();
            meta.classList.add("title");
            setTimeout(() => {
              const local = document.getElementById("local");
              meta.remove();
              local.classList.add("title");
              setTimeout(() => {
                const sourc = document.getElementById("sourc");
                local.remove();
                sourc.classList.add("title");
                setTimeout(() => {
                  const payload = document.getElementById("payload");
                  sourc.remove();
                  payload.classList.add("title");
                  setTimeout(() => {
                    const data = document.getElementById("data");
                    payload.remove();
                    data.classList.add("title");
                    setTimeout(() => {
                      const portfolio = document.getElementById("portfolio");
                      data.remove();
                      portfolio.classList.add("title");
                      // setTimeout(() => {
                      //   const comments = document.getElementById("comments");
                      //   portfolio.remove();
                      //   comments.classList.add("title");
                        setTimeout(() => {
                          const dynamic = document.getElementById("dynamic");
                          portfolio.remove();
                          dynamic.classList.add("title");
                          setTimeout(() => {
                            const static = document.getElementById("static");
                            dynamic.remove();
                            static.classList.add("title");
                            setTimeout(() => {
                              static.remove();
                              ss8.remove();
                              ss12.classList.replace("ss12-non","ss12-dis");
                              ss16();
                            }, 1900);
                          }, 200);
                        }, 2000);//13600
                      //}, 1200);//14000
                    }, 1600);//14800
                  }, 200);//14600
                }, 0);//13000
              }, 2000);//11100
            }, 1800);//9300
          }, 1300); //7200
        }, 1900); //5600
      }, 3700); //

    //},);
  
  });

  function ss18() {
    ss18con.style.display = "block";
    setTimeout(() => {
      const api = document.getElementById("api");
      // ssl.remove();
      api.classList.add("title-18ss");

      setTimeout(() => {
        const mid = document.getElementById("mid");

        mid.classList.add("title-18ss");

        setTimeout(() => {
          const ssl = document.getElementById("ssl");
          //ht.remove();
          ssl.classList.add("title-18ss");
          setTimeout(() => {
            const ht = document.getElementById("ht");
            //mid.remove();
            ht.classList.add("title-18ss");
            setTimeout(() => {
              const serv = document.getElementById("serv");
              // api.remove();
              serv.classList.add("title-18ss");
              setTimeout(() => {
                const auth = document.getElementById("auth");
                // api.remove();
                auth.classList.add("title-18ss");

                setTimeout(() => {
                  const err = document.getElementById("err");
                  // api.remove();
                  err.classList.add("title-18ss");
                  setTimeout(() => {
                    const id = document.getElementById("id");
                    // api.remove();
                    id.classList.add("title-18ss");
                    setTimeout(() => {
                      const stus = document.getElementById("stus");
                      // api.remove();
                      stus.classList.add("title-18ss");
                      setTimeout(() => {
                        ss18con.remove();
                        ss20el.classList.replace("ss20-non", "ss20-dis");
                        ss20();
                      }, 200);
                    }, 60);
                  }, 80);
                }, 100);
              }, 120);
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 0);
  }

  function ss20() {
    ss20con.style.display = "block";
    setTimeout(() => {
      const git = document.getElementById("git");
      // ssl.remove();
      git.classList.add("title-18ss");

      setTimeout(() => {
        const stag = document.getElementById("stag");

        stag.classList.add("title-18ss");

        setTimeout(() => {
          const mer = document.getElementById("mer");
          //ht.remove();
          mer.classList.add("title-18ss");
          setTimeout(() => {
            const qa = document.getElementById("qa");
            //mid.remove();
            qa.classList.add("title-18ss");
            setTimeout(() => {
              const prod = document.getElementById("prod");
              // api.remove();
              prod.classList.add("title-18ss");
              setTimeout(() => {
                const dev = document.getElementById("dev");
                // api.remove();
                dev.classList.add("title-18ss");

                setTimeout(() => {
                  const bug = document.getElementById("bug");
                  // api.remove();
                  bug.classList.add("title-18ss");
                  setTimeout(() => {
                    const bran = document.getElementById("bran");
                    // api.remove();
                    bran.classList.add("title-18ss");
                    setTimeout(() => {
                      const task = document.getElementById("task");
                      // api.remove();
                      task.classList.add("title-18ss");
                      setTimeout(() => {
                        const pr = document.getElementById("pr");
                        // api.remove();
                        pr.classList.add("title-18ss");
                        setTimeout(() => {
                          ss20con.remove();
                          ss22el.classList.replace("ss22-non", "ss22-dis");
                          ss22();
                        }, 200);
                      }, 200);
                    }, 60);
                  }, 80);
                }, 100);
              }, 120);
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 0);
  }

  function ss22() {
    ss22con.style.display = "block";
    setTimeout(() => {
      const debug = document.getElementById("debug");
      // ssl.remove();
      debug.classList.add("title-18ss");

      setTimeout(() => {
        const exc = document.getElementById("exc");

        exc.classList.add("title-18ss");

        setTimeout(() => {
          const brpt = document.getElementById("brpt");
          //ht.remove();
          brpt.classList.add("title-18ss");
          setTimeout(() => {
            const wrk = document.getElementById("wrk");
            //mid.remove();
            wrk.classList.add("title-18ss");
            setTimeout(() => {
              const exc = document.getElementById("exc");
              // api.remove();
              exc.classList.add("title-18ss");
              setTimeout(() => {
                const srpt = document.getElementById("srpt");
                // api.remove();
                srpt.classList.add("title-18ss");

                setTimeout(() => {
                  const iss = document.getElementById("iss");
                  // api.remove();
                  iss.classList.add("title-18ss");

   setTimeout(()=>{

    const comp = document.getElementById("comp");
      // api.remove();
      comp.classList.add("title-18ss");
    setTimeout(() => {
      const trsh = document.getElementById("trsh");
      // api.remove();
      trsh.classList.add("title-18ss");

      setTimeout(() => {
        const val = document.getElementById("val");
        // api.remove();
        val.classList.add("title-18ss");
        setTimeout(() => {
          ss22con.remove();
          ss24el.classList.replace("ss24-non", "ss24-dis");
          ss24();
        }, 2480);
      }, 80);

    },200)

   },180);


                 

                  
                }, 100);
              }, 120);
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 0);
  }

  function ss24() {
    ss24con.style.display = "block";
    setTimeout(() => {
      const access = document.getElementById("access");
      // ssl.remove();
      access.classList.add("title-18ss");

      setTimeout(() => {
        const dom = document.getElementById("dom");

        dom.classList.add("title-18ss");

        setTimeout(() => {
          const console = document.getElementById("console");
          //ht.remove();
          console.classList.add("title-18ss");
          setTimeout(() => {
            const url = document.getElementById("url");
            //mid.remove();
            url.classList.add("title-18ss");
            setTimeout(() => {
              const cmdprt = document.getElementById("cmdprt");
              // api.remove();
              cmdprt.classList.add("title-18ss");
              setTimeout(() => {

                const hash = document.getElementById("hash");
              // api.remove();
              hash.classList.add("title-18ss");
                setTimeout(() => {
                  const batch = document.getElementById("batch");
                  //mid.remove();
                  batch.classList.add("title-18ss");
                  setTimeout(() => {
                    const service = document.getElementById("service");
                    // api.remove();
                    service.classList.add("title-18ss");
                    setTimeout(() => {
                      setTimeout(() => {
                        const netw = document.getElementById("netw");
                        // api.remove();
                        netw.classList.add("title-18ss");
                        setTimeout(() => {
                          ss24con.remove();
                          ss25el.classList.replace("ss25-non","ss25-dis");
                          ss25();
                        }, 600);
                      }, 100);
                    }, 120);
                  }, 100);
                }, 100);
              }, 80);
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 0);
  }
  function ss16() {
    if (title) title.remove();
    if (ss8) ss8.remove();
    ss12.classList.replace("ss12-non", "ss12-dis");
   
      const code = document.getElementById("code");

      code.classList.add("title-12ss");
      setTimeout(() => {
        const build = document.getElementById("build");
        //code.remove();
        build.classList.add("title-12ss");
        setTimeout(() => {
          const run = document.getElementById("run");
          //build.remove();
          run.classList.add("title-12ss");
          // setTimeout(() => {
          // const test = document.getElementById("test");
          //run.remove();
          //test.classList.add("title-12ss");
          setTimeout(() => {
            const deploy = document.getElementById("deploy");
            // test.remove();
            deploy.classList.add("title-12ss");

            setTimeout(() => {
              //static.remove();
              ss12.remove();
              ss18el.classList.replace("ss18-non", "ss18-dis");
              ss18();
            }, 600);
          }, 600);
          // }, 0);
        }, 400);
      }, 500);

  } 

  function ss25() {
    ss25con.style.display = "block";
    setTimeout(() => {
      const db = document.getElementById("db");
      // ssl.remove();
      db.classList.add("title-18ss");

      setTimeout(() => {
        const exec = document.getElementById("exec");

        exec.classList.add("title-18ss");

        setTimeout(() => {
          const connct = document.getElementById("connct");
          //ht.remove();
          connct.classList.add("title-18ss");
          setTimeout(() => {
            const table = document.getElementById("table");
            //mid.remove();
            table.classList.add("title-18ss");
            setTimeout(() => {
              const logs = document.getElementById("logs");
              // api.remove();
              logs.classList.add("title-18ss");
              setTimeout(() => {
                const optimz = document.getElementById("optimz");
                // api.remove();
                optimz.classList.add("title-18ss");

                setTimeout(() => {
                  const row = document.getElementById("row");
                  // api.remove();
                  row.classList.add("title-18ss");
                  setTimeout(() => {
                    const key = document.getElementById("key");
                    // api.remove();
                    key.classList.add("title-18ss");
                    setTimeout(() => {
                      const migr = document.getElementById("migr");
                      // api.remove();
                      migr.classList.add("title-18ss");
                      setTimeout(() => {
                        const index = document.getElementById("index");
                        // api.remove();
                        index.classList.add("title-18ss");
                        setTimeout(() => {
                          ss25con.remove();
                          ss26el.classList.replace("ss26-non", "ss26-dis");
                          ss26();
                        }, 200);
                      }, 200);
                    }, 60);
                  }, 80);
                }, 100);
              }, 120);
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 0);
  }
  function ss26() {
    ss26con.style.display = "block";
    setTimeout(() => {
      const team = document.getElementById("team");
      // ssl.remove();
      team.classList.add("title-18ss");

      setTimeout(() => {
        const attch = document.getElementById("attch");

        attch.classList.add("title-18ss");

        setTimeout(() => {
          const draft = document.getElementById("draft");
          //ht.remove();
          draft.classList.add("title-18ss");
          setTimeout(() => {
            const kt = document.getElementById("kt");
            //mid.remove();
            kt.classList.add("title-18ss");
            setTimeout(() => {
              const revert = document.getElementById("revert");
              // api.remove();
              revert.classList.add("title-18ss");
              setTimeout(() => {
                const reviw = document.getElementById("reviw");
                // api.remove();
                reviw.classList.add("title-18ss");

                setTimeout(() => {
                  const eff = document.getElementById("eff");
                  // api.remove();
                  eff.classList.add("title-18ss");
                  setTimeout(() => {
                    const ping = document.getElementById("ping");
                    // api.remove();
                    ping.classList.add("title-18ss");
                    setTimeout(() => {
                      const perf = document.getElementById("perf");
                      // api.remove();
                      perf.classList.add("title-18ss");
                     
                        setTimeout(() => {
                          ss26con.remove();
                          ss30el.classList.replace("ss30-non", "ss30-dis");
                          ss30();
                        }, 900);
                   
                    }, 60);
                  }, 80);
                }, 100);
              }, 120);
            }, 100);
          }, 100);
        }, 100);
      }, 500);
    }, 0);
  }
  function ss30(){
   // ss30con.style.display = "block";
    setTimeout(() => {
      const thank = document.getElementById("thank");
      //local.remove();
      thank.classList.add("title-ls");
      setTimeout(() => {
        const share = document.getElementById("share");
       // thank.remove();
        share.classList.add("title-ls");
        setTimeout(() => {
          const data = document.getElementById("follow");
         // share.remove();
         follow.classList.add("title-ls");
          setTimeout(() => {
           
            //}, 1200);//14000
          }, 1600);//14800
        }, 100);//14600
      }, 600);//13000
    }, 100);//11100
  }
})();
