import Tables from './Tables'

const QueryStrings = {
  LoginUser: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.LoginUser.name} (
          ${Tables.LoginUser.columns.LoginID.name} ${Tables.LoginUser.columns.LoginID.type}, 
          ${Tables.LoginUser.columns.Password.name} ${Tables.LoginUser.columns.Password.type},
          PRIMARY KEY (${Tables.LoginUser.columns.LoginID.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.LoginUser.name}`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.LoginUser.name}`
      },
      LoginID: {
        by: {
          LoginID_Password: {
            pure: `
              SELECT ${Tables.LoginUser.columns.LoginID.name} FROM ${Tables.LoginUser.name} 
              WHERE ${Tables.LoginUser.columns.LoginID.name} = ? AND ${Tables.LoginUser.columns.Password.name} = ?
            `
          }
        }
      }
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.LoginUser.name} VALUES (?, ?)`
    }
  },
  MGyoumu: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MGyoumu.name} (
          ${Tables.MGyoumu.columns.NoGyoumu.name} ${Tables.MGyoumu.columns.NoGyoumu.type},
          ${Tables.MGyoumu.columns.Nendo.name} ${Tables.MGyoumu.columns.Nendo.type},
          ${Tables.MGyoumu.columns.NameGyoumu.name} ${Tables.MGyoumu.columns.NameGyoumu.type},
          PRIMARY KEY (${Tables.MGyoumu.columns.NoGyoumu.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MGyoumu.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.MGyoumu.name} VALUES (?, ?, ?)`,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Tables.MGyoumu.name} (${Tables.MGyoumu.columns.Nendo.name}, ${Tables.MGyoumu.columns.NameGyoumu.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        orderBy: {
          NendoDesc: {
            pure: `SELECT * FROM ${Tables.MGyoumu.name} ORDER BY ${Tables.MGyoumu.columns.Nendo.name} DESC`
          }
        },
        by: {
          NoGyoumu: {
            pure: `SELECT * FROM ${Tables.MGyoumu.name} WHERE ${Tables.MGyoumu.columns.NoGyoumu.name} = ?`
          }
        }
      },
      NameGyoumu: {
        by: {
          NoGyoumu: {
            pure: `SELECT ${Tables.MGyoumu.columns.NameGyoumu.name} FROM ${Tables.MGyoumu.name} WHERE ${Tables.MGyoumu.columns.NoGyoumu.name} = ?`
          }
        }
      }
    }
  },
  Bridge: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.Bridge.name} (
          ${Tables.Bridge.columns.NoGyoumu.name} ${Tables.Bridge.columns.NoGyoumu.type},
          ${Tables.Bridge.columns.BridgeID.name} ${Tables.Bridge.columns.BridgeID.type},
          ${Tables.Bridge.columns.CodeBridge.name} ${Tables.Bridge.columns.CodeBridge.type},
          ${Tables.Bridge.columns.BridgeIDTenken.name} ${Tables.Bridge.columns.BridgeIDTenken.type},
          ${Tables.Bridge.columns.NameShisetsu.name} ${Tables.Bridge.columns.NameShisetsu.type},
          ${Tables.Bridge.columns.NameShisetsuKana.name} ${Tables.Bridge.columns.NameShisetsuKana.type},
          ${Tables.Bridge.columns.NameRosen.name} ${Tables.Bridge.columns.NameRosen.type},
          ${Tables.Bridge.columns.Shozaichi1Ji.name} ${Tables.Bridge.columns.Shozaichi1Ji.type},
          ${Tables.Bridge.columns.Shozaichi1Itaru.name} ${Tables.Bridge.columns.Shozaichi1Itaru.type},
          ${Tables.Bridge.columns.NameSoshiki.name} ${Tables.Bridge.columns.NameSoshiki.type},
          ${Tables.Bridge.columns.RokaJouken.name} ${Tables.Bridge.columns.RokaJouken.type},
          ${Tables.Bridge.columns.Ukairo.name} ${Tables.Bridge.columns.Ukairo.type},
          ${Tables.Bridge.columns.NameJisenIppan.name} ${Tables.Bridge.columns.NameJisenIppan.type},
          ${Tables.Bridge.columns.NameKinkyuyuso.name} ${Tables.Bridge.columns.NameKinkyuyuso.type},
          ${Tables.Bridge.columns.SenyuBukken.name} ${Tables.Bridge.columns.SenyuBukken.type},
          ${Tables.Bridge.columns.NenKasetsu.name} ${Tables.Bridge.columns.NenKasetsu.type},
          ${Tables.Bridge.columns.BridgeLength.name} ${Tables.Bridge.columns.BridgeLength.type},
          ${Tables.Bridge.columns.WidthZen.name} ${Tables.Bridge.columns.WidthZen.type},
          ${Tables.Bridge.columns.BridgeKeishiki.name} ${Tables.Bridge.columns.BridgeKeishiki.type},
          ${Tables.Bridge.columns.KyoriJi.name} ${Tables.Bridge.columns.KyoriJi.type},
          ${Tables.Bridge.columns.KyoriItaru.name} ${Tables.Bridge.columns.KyoriItaru.type},
          ${Tables.Bridge.columns.FlgCalvert.name} ${Tables.Bridge.columns.FlgCalvert.type},
          PRIMARY KEY (${Tables.Bridge.columns.NoGyoumu.name}, ${Tables.Bridge.columns.BridgeID.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.Bridge.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.Bridge.name} (
        ${Tables.Bridge.columns.NoGyoumu.name},
        ${Tables.Bridge.columns.BridgeID.name},
        ${Tables.Bridge.columns.CodeBridge.name},
        ${Tables.Bridge.columns.BridgeIDTenken.name},
        ${Tables.Bridge.columns.NameShisetsu.name},
        ${Tables.Bridge.columns.NameShisetsuKana.name},
        ${Tables.Bridge.columns.NameRosen.name},
        ${Tables.Bridge.columns.Shozaichi1Ji.name},
        ${Tables.Bridge.columns.Shozaichi1Itaru.name},
        ${Tables.Bridge.columns.NameSoshiki.name},
        ${Tables.Bridge.columns.RokaJouken.name},
        ${Tables.Bridge.columns.Ukairo.name},
        ${Tables.Bridge.columns.NameJisenIppan.name},
        ${Tables.Bridge.columns.NameKinkyuyuso.name},
        ${Tables.Bridge.columns.SenyuBukken.name},
        ${Tables.Bridge.columns.NenKasetsu.name},
        ${Tables.Bridge.columns.BridgeLength.name},
        ${Tables.Bridge.columns.WidthZen.name},
        ${Tables.Bridge.columns.BridgeKeishiki.name},
        ${Tables.Bridge.columns.KyoriJi.name},
        ${Tables.Bridge.columns.KyoriItaru.name},
        ${Tables.Bridge.columns.FlgCalvert.name}
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.Bridge.name}`
      },
      FlgCalvert: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT ${Tables.Bridge.columns.FlgCalvert.name} 
              FROM ${Tables.Bridge.name}
              WHERE 
                ${Tables.Bridge.columns.NoGyoumu.name} = ? AND
                ${Tables.Bridge.columns.BridgeID.name} = ?
            `
          }
        }
      },
      NenKasetsu_BridgeLength_WidthZen_BridgeKeisiki: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT 
                ${Tables.Bridge.columns.NenKasetsu.name},
                ${Tables.Bridge.columns.BridgeLength.name},
                ${Tables.Bridge.columns.WidthZen.name},
                ${Tables.Bridge.columns.BridgeKeishiki.name}
              FROM ${Tables.Bridge.name}
              WHERE 
                ${Tables.Bridge.columns.NoGyoumu.name} = ? AND
                ${Tables.Bridge.columns.BridgeID.name} = ?
            `
          }
        }
      }
    },
    update: {
      FlgCalvert: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              UPDATE ${Tables.Bridge.name}
              SET ${Tables.Bridge.columns.FlgCalvert.name} = ?
              WHERE
                ${Tables.Bridge.columns.NoGyoumu.name} = ? AND
                ${Tables.Bridge.columns.BridgeID.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenRireki: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.TenkenRireki.name} (
          ${Tables.TenkenRireki.columns.NoGyoumu.name} ${Tables.TenkenRireki.columns.NoGyoumu.type},
          ${Tables.TenkenRireki.columns.BridgeID.name} ${Tables.TenkenRireki.columns.BridgeID.type},
          ${Tables.TenkenRireki.columns.FlgTablet.name} ${Tables.TenkenRireki.columns.FlgTablet.type},
          ${Tables.TenkenRireki.columns.NengappiTenken.name} ${Tables.TenkenRireki.columns.NengappiTenken.type},
          ${Tables.TenkenRireki.columns.NameTenkensha.name} ${Tables.TenkenRireki.columns.NameTenkensha.type},
          ${Tables.TenkenRireki.columns.ShindanTenken.name} ${Tables.TenkenRireki.columns.ShindanTenken.type},
          ${Tables.TenkenRireki.columns.Shoken.name} ${Tables.TenkenRireki.columns.Shoken.type},
          ${Tables.TenkenRireki.columns.NameShisetsuTenken.name} ${Tables.TenkenRireki.columns.NameShisetsuTenken.type},
          ${Tables.TenkenRireki.columns.NameShisetsuKanaTenken.name} ${Tables.TenkenRireki.columns.NameShisetsuKanaTenken.type},
          ${Tables.TenkenRireki.columns.IdoStartTenken.name} ${Tables.TenkenRireki.columns.IdoStartTenken.type},
          ${Tables.TenkenRireki.columns.KeidoStartTenken.name} ${Tables.TenkenRireki.columns.KeidoStartTenken.type},
          ${Tables.TenkenRireki.columns.NengappiKoushin.name} ${Tables.TenkenRireki.columns.NengappiKoushin.type},
          ${Tables.TenkenRireki.columns.Bikou.name} ${Tables.TenkenRireki.columns.Bikou.type},
          PRIMARY KEY (${Tables.TenkenRireki.columns.NoGyoumu.name}, ${Tables.TenkenRireki.columns.BridgeID.name}, ${Tables.TenkenRireki.columns.FlgTablet.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.TenkenRireki.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Tables.TenkenRireki.name} 
              WHERE 
                ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRireki.columns.BridgeID.name} = ?
          `,
          with: {
            FlgTabletEqual1: `
              DELETE FROM ${Tables.TenkenRireki.name} 
              WHERE 
                ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Tables.TenkenRireki.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Tables.TenkenRireki.name} (
          ${Tables.TenkenRireki.columns.NoGyoumu.name},
          ${Tables.TenkenRireki.columns.BridgeID.name},
          ${Tables.TenkenRireki.columns.NengappiTenken.name},
          ${Tables.TenkenRireki.columns.NameTenkensha.name},
          ${Tables.TenkenRireki.columns.ShindanTenken.name},
          ${Tables.TenkenRireki.columns.Shoken.name},
          ${Tables.TenkenRireki.columns.NameShisetsuTenken.name},
          ${Tables.TenkenRireki.columns.NameShisetsuKanaTenken.name},
          ${Tables.TenkenRireki.columns.IdoStartTenken.name},
          ${Tables.TenkenRireki.columns.KeidoStartTenken.name},
          ${Tables.TenkenRireki.columns.NengappiKoushin.name},
          ${Tables.TenkenRireki.columns.FlgTablet.name},
          ${Tables.TenkenRireki.columns.Bikou.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    },
    select: {
      all: {
        pure: `
          SELECT * FROM ${Tables.TenkenRireki.name}
        `
      },
      FlgTablet: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT ${Tables.TenkenRireki.columns.FlgTablet.name}
              FROM ${Tables.TenkenRireki.name}
              WHERE 
                ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRireki.columns.BridgeID.name} = ?
            `
          }
        }
      },
      NameTenkensha_ShindanTenken_Shoken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              SELECT 
                ${Tables.TenkenRireki.columns.NameTenkensha.name},
                ${Tables.TenkenRireki.columns.ShindanTenken.name},
                ${Tables.TenkenRireki.columns.Shoken.name}
              FROM ${Tables.TenkenRireki.name}
              WHERE
                ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Tables.TenkenRireki.columns.FlgTablet.name} = ?
            `
          }
        }
      }
    },
    update: {
      ShindanTenken: {
        by: {
          NoGyoumu_BridgeID: {
            with: {
              FlgTabletEqual0: `
                UPDATE ${Tables.TenkenRireki.name}
                SET ${Tables.TenkenRireki.columns.ShindanTenken.name} = ?
                WHERE
                  ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                  ${Tables.TenkenRireki.columns.BridgeID.name} = ?
              `
            }
          }
        }
      },
      NengappiTenken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              UPDATE ${Tables.TenkenRireki.name}
              SET ${Tables.TenkenRireki.columns.NengappiTenken.name} = ?
              WHERE
                ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Tables.TenkenRireki.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      NengappiTenken_NameTenkensha_ShindanTenken_Shoken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              UPDATE ${Tables.TenkenRireki.name}
              SET 
                ${Tables.TenkenRireki.columns.NengappiTenken.name} = ?,
                ${Tables.TenkenRireki.columns.NameTenkensha.name} = ?,
                ${Tables.TenkenRireki.columns.ShindanTenken.name} = ?,
                ${Tables.TenkenRireki.columns.Shoken.name} = ?
              WHERE
                ${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Tables.TenkenRireki.columns.FlgTablet.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenRirekiTemp: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.TenkenRirekiTemp.name} (
          ${Tables.TenkenRirekiTemp.columns.NoGyoumu.name} ${Tables.TenkenRirekiTemp.columns.NoGyoumu.type},
          ${Tables.TenkenRirekiTemp.columns.BridgeID.name} ${Tables.TenkenRirekiTemp.columns.BridgeID.type},
          ${Tables.TenkenRirekiTemp.columns.FlgTablet.name} ${Tables.TenkenRirekiTemp.columns.FlgTablet.type},
          ${Tables.TenkenRirekiTemp.columns.NengappiTenken.name} ${Tables.TenkenRirekiTemp.columns.NengappiTenken.type},
          ${Tables.TenkenRirekiTemp.columns.NameTenkensha.name} ${Tables.TenkenRirekiTemp.columns.NameTenkensha.type},
          ${Tables.TenkenRirekiTemp.columns.ShindanTenken.name} ${Tables.TenkenRirekiTemp.columns.ShindanTenken.type},
          ${Tables.TenkenRirekiTemp.columns.Shoken.name} ${Tables.TenkenRirekiTemp.columns.Shoken.type},
          ${Tables.TenkenRirekiTemp.columns.NameShisetsuTenken.name} ${Tables.TenkenRirekiTemp.columns.NameShisetsuTenken.type},
          ${Tables.TenkenRirekiTemp.columns.NameShisetsuKanaTenken.name} ${Tables.TenkenRirekiTemp.columns.NameShisetsuKanaTenken.type},
          ${Tables.TenkenRirekiTemp.columns.IdoStartTenken.name} ${Tables.TenkenRirekiTemp.columns.IdoStartTenken.type},
          ${Tables.TenkenRirekiTemp.columns.KeidoStartTenken.name} ${Tables.TenkenRirekiTemp.columns.KeidoStartTenken.type},
          ${Tables.TenkenRirekiTemp.columns.NengappiKoushin.name} ${Tables.TenkenRirekiTemp.columns.NengappiKoushin.type},
          ${Tables.TenkenRirekiTemp.columns.Bikou.name} ${Tables.TenkenRirekiTemp.columns.Bikou.type},
          PRIMARY KEY (${Tables.TenkenRirekiTemp.columns.NoGyoumu.name}, ${Tables.TenkenRirekiTemp.columns.BridgeID.name}, ${Tables.TenkenRirekiTemp.columns.FlgTablet.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.TenkenRirekiTemp.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Tables.TenkenRirekiTemp.name} 
              WHERE 
                ${Tables.TenkenRirekiTemp.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenRirekiTemp.columns.BridgeID.name} = ?
          `
        }
      }
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Tables.TenkenRirekiTemp.name} (
          ${Tables.TenkenRirekiTemp.columns.NoGyoumu.name},
          ${Tables.TenkenRirekiTemp.columns.BridgeID.name},
          ${Tables.TenkenRirekiTemp.columns.NengappiTenken.name},
          ${Tables.TenkenRirekiTemp.columns.NameTenkensha.name},
          ${Tables.TenkenRirekiTemp.columns.ShindanTenken.name},
          ${Tables.TenkenRirekiTemp.columns.Shoken.name},
          ${Tables.TenkenRirekiTemp.columns.NameShisetsuTenken.name},
          ${Tables.TenkenRirekiTemp.columns.NameShisetsuKanaTenken.name},
          ${Tables.TenkenRirekiTemp.columns.IdoStartTenken.name},
          ${Tables.TenkenRirekiTemp.columns.KeidoStartTenken.name},
          ${Tables.TenkenRirekiTemp.columns.NengappiKoushin.name},
          ${Tables.TenkenRirekiTemp.columns.FlgTablet.name},
          ${Tables.TenkenRirekiTemp.columns.Bikou.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      NoGyoumu_BridgeID_NengappiTenken: {
        pure: `
          INSERT INTO ${Tables.TenkenRirekiTemp.name} (
            ${Tables.TenkenRirekiTemp.columns.NoGyoumu.name}, 
            ${Tables.TenkenRirekiTemp.columns.BridgeID.name}, 
            ${Tables.TenkenRirekiTemp.columns.NengappiTenken.name}) 
          VALUES (?, ?, ?)
        `
      }
    },
    update: {
      NengappiTenken: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              UPDATE ${Tables.TenkenRirekiTemp.name}
              SET 
                ${Tables.TenkenRirekiTemp.columns.NengappiTenken.name} = ?
              WHERE 
                ${Tables.TenkenRirekiTemp.columns.NoGyoumu.name} = ? AND 
                ${Tables.TenkenRirekiTemp.columns.BridgeID.name} = ?
            `
          }
        }
      }
    },
    select: {
      all: {
        pure: ``,
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT * FROM ${Tables.TenkenRirekiTemp.name}
              WHERE 
                ${Tables.TenkenRirekiTemp.columns.NoGyoumu.name} = ? AND 
                ${Tables.TenkenRirekiTemp.columns.BridgeID.name} = ?
            `
          }
        }
      }
    }
  },
  BuzaiHyouka: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.BuzaiHyouka.name} (
          ${Tables.BuzaiHyouka.columns.NoGyoumu.name} ${Tables.BuzaiHyouka.columns.NoGyoumu.type},
          ${Tables.BuzaiHyouka.columns.BridgeID.name} ${Tables.BuzaiHyouka.columns.BridgeID.type},
          ${Tables.BuzaiHyouka.columns.FlgTablet.name} ${Tables.BuzaiHyouka.columns.FlgTablet.type},
          ${Tables.BuzaiHyouka.columns.NoBuzai.name} ${Tables.BuzaiHyouka.columns.NoBuzai.type},
          ${Tables.BuzaiHyouka.columns.ShindanTenken.name} ${Tables.BuzaiHyouka.columns.ShindanTenken.type},
          ${Tables.BuzaiHyouka.columns.CodeHenjouTenken.name} ${Tables.BuzaiHyouka.columns.CodeHenjouTenken.type},
          ${Tables.BuzaiHyouka.columns.BikouTenken.name} ${Tables.BuzaiHyouka.columns.BikouTenken.type},
          ${Tables.BuzaiHyouka.columns.ShindanSochigo.name} ${Tables.BuzaiHyouka.columns.ShindanSochigo.type},
          ${Tables.BuzaiHyouka.columns.CodeHenjouSochigo.name} ${Tables.BuzaiHyouka.columns.CodeHenjouSochigo.type},
          ${Tables.BuzaiHyouka.columns.NengappiSaihantei.name} ${Tables.BuzaiHyouka.columns.NengappiSaihantei.type},
          PRIMARY KEY (
            ${Tables.BuzaiHyouka.columns.NoGyoumu.name}, 
            ${Tables.BuzaiHyouka.columns.BridgeID.name}, 
            ${Tables.BuzaiHyouka.columns.FlgTablet.name}, 
            ${Tables.BuzaiHyouka.columns.NoBuzai.name}
          )
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.BuzaiHyouka.name}`,
      by: {
        NoGyoumu_BridgeID: {
          with: {
            FlgTabletEqual1: `
              DELETE FROM ${Tables.BuzaiHyouka.name} 
              WHERE 
                ${Tables.BuzaiHyouka.columns.NoGyoumu.name} = ? AND
                ${Tables.BuzaiHyouka.columns.BridgeID.name} = ? AND
                ${Tables.BuzaiHyouka.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    },
    insert: {
      fullColumn: ``,
      NoGyoumu_BridgeID_FlgTablet_NoBuzai_ShindanTenken_CodeHenjouTenken_BikouTenken: {
        pure: `
          INSERT INTO ${Tables.BuzaiHyouka.name} (
            ${Tables.BuzaiHyouka.columns.NoGyoumu.name},
            ${Tables.BuzaiHyouka.columns.BridgeID.name},
            ${Tables.BuzaiHyouka.columns.FlgTablet.name},
            ${Tables.BuzaiHyouka.columns.NoBuzai.name},
            ${Tables.BuzaiHyouka.columns.ShindanTenken.name},
            ${Tables.BuzaiHyouka.columns.CodeHenjouTenken.name},
            ${Tables.BuzaiHyouka.columns.BikouTenken.name}
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `
      }
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.BuzaiHyouka.name}`,
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              SELECT * 
              FROM ${Tables.BuzaiHyouka.name}
              WHERE 
                ${Tables.BuzaiHyouka.columns.NoGyoumu.name} = ? AND
                ${Tables.BuzaiHyouka.columns.BridgeID.name} = ? AND
                ${Tables.BuzaiHyouka.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      NoBuzai_ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihentei: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              SELECT 
                ${Tables.BuzaiHyouka.columns.NoBuzai.name},
                ${Tables.BuzaiHyouka.columns.ShindanTenken.name},
                ${Tables.BuzaiHyouka.columns.CodeHenjouTenken.name},
                ${Tables.BuzaiHyouka.columns.BikouTenken.name},
                ${Tables.BuzaiHyouka.columns.ShindanSochigo.name},
                ${Tables.BuzaiHyouka.columns.CodeHenjouSochigo.name},
                ${Tables.BuzaiHyouka.columns.NengappiSaihantei.name}
              FROM ${Tables.BuzaiHyouka.name}
              WHERE 
                ${Tables.BuzaiHyouka.columns.NoGyoumu.name} = ? AND
                ${Tables.BuzaiHyouka.columns.BridgeID.name} = ? AND
                ${Tables.BuzaiHyouka.columns.FlgTablet.name} = ?
            `
          }
        }
      }
    },
    update: {
      fullColumn: {
        by: {}
      }
    },
    insert_update: {
      ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihantei: {
        by: {
          NoGyoumu_BridgeID_FlgTablet_NoBuzai: {
            pure: `
              INSERT INTO ${Tables.BuzaiHyouka.name} (
                ${Tables.BuzaiHyouka.columns.NoGyoumu.name}, 
                ${Tables.BuzaiHyouka.columns.BridgeID.name}, 
                ${Tables.BuzaiHyouka.columns.FlgTablet.name}, 
                ${Tables.BuzaiHyouka.columns.NoBuzai.name}, 
                ${Tables.BuzaiHyouka.columns.ShindanTenken.name}, 
                ${Tables.BuzaiHyouka.columns.CodeHenjouTenken.name}, 
                ${Tables.BuzaiHyouka.columns.BikouTenken.name}, 
                ${Tables.BuzaiHyouka.columns.ShindanSochigo.name}, 
                ${Tables.BuzaiHyouka.columns.CodeHenjouSochigo.name}, 
                ${Tables.BuzaiHyouka.columns.NengappiSaihantei.name}
              ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(
                ${Tables.BuzaiHyouka.columns.NoGyoumu.name}, 
                ${Tables.BuzaiHyouka.columns.BridgeID.name}, 
                ${Tables.BuzaiHyouka.columns.FlgTablet.name}, 
                ${Tables.BuzaiHyouka.columns.NoBuzai.name}
              ) DO UPDATE SET
                ${Tables.BuzaiHyouka.columns.ShindanTenken.name} = ?, 
                ${Tables.BuzaiHyouka.columns.CodeHenjouTenken.name} = ?, 
                ${Tables.BuzaiHyouka.columns.BikouTenken.name} = ?, 
                ${Tables.BuzaiHyouka.columns.ShindanSochigo.name} = ?, 
                ${Tables.BuzaiHyouka.columns.CodeHenjouSochigo.name} = ?, 
                ${Tables.BuzaiHyouka.columns.NengappiSaihantei.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenhyoGazou: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.TenkenhyoGazou.name} (
          ${Tables.TenkenhyoGazou.columns.NoGyoumu.name} ${Tables.TenkenhyoGazou.columns.NoGyoumu.type},
          ${Tables.TenkenhyoGazou.columns.BridgeID.name} ${Tables.TenkenhyoGazou.columns.BridgeID.type},
          ${Tables.TenkenhyoGazou.columns.FlgTablet.name} ${Tables.TenkenhyoGazou.columns.FlgTablet.type},
          ${Tables.TenkenhyoGazou.columns.GazouID.name} ${Tables.TenkenhyoGazou.columns.GazouID.type},
          ${Tables.TenkenhyoGazou.columns.NoShashin.name} ${Tables.TenkenhyoGazou.columns.NoShashin.type},
          ${Tables.TenkenhyoGazou.columns.NameBuzai.name} ${Tables.TenkenhyoGazou.columns.NameBuzai.type},
          ${Tables.TenkenhyoGazou.columns.NoBuzai.name} ${Tables.TenkenhyoGazou.columns.NoBuzai.type},
          ${Tables.TenkenhyoGazou.columns.DamageShurui.name} ${Tables.TenkenhyoGazou.columns.DamageShurui.type},
          ${Tables.TenkenhyoGazou.columns.Keikan.name} ${Tables.TenkenhyoGazou.columns.Keikan.type},
          ${Tables.TenkenhyoGazou.columns.ShindanTenken.name} ${Tables.TenkenhyoGazou.columns.ShindanTenken.type},
          ${Tables.TenkenhyoGazou.columns.Bikou.name} ${Tables.TenkenhyoGazou.columns.Bikou.type},
          ${Tables.TenkenhyoGazou.columns.HoushinChousa.name} ${Tables.TenkenhyoGazou.columns.HoushinChousa.type},
          ${Tables.TenkenhyoGazou.columns.HoushinSochi.name} ${Tables.TenkenhyoGazou.columns.HoushinSochi.type},
          ${Tables.TenkenhyoGazou.columns.NameFile.name} ${Tables.TenkenhyoGazou.columns.NameFile.type},
          ${Tables.TenkenhyoGazou.columns.CodeDamageShurui.name} ${Tables.TenkenhyoGazou.columns.CodeDamageShurui.type},
          ${Tables.TenkenhyoGazou.columns.FlgDamage.name} ${Tables.TenkenhyoGazou.columns.FlgDamage.type},
          ${Tables.TenkenhyoGazou.columns.FullPath.name} ${Tables.TenkenhyoGazou.columns.FullPath.type},
          PRIMARY KEY (${Tables.TenkenhyoGazou.columns.NoGyoumu.name}, ${Tables.TenkenhyoGazou.columns.BridgeID.name}, ${Tables.TenkenhyoGazou.columns.FlgTablet.name}, ${Tables.TenkenhyoGazou.columns.GazouID.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.TenkenhyoGazou.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Tables.TenkenhyoGazou.name} 
            WHERE 
              ${Tables.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
              ${Tables.TenkenhyoGazou.columns.BridgeID.name} = ?
          `
        }
      }
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Tables.TenkenhyoGazou.name} (
          ${Tables.TenkenhyoGazou.columns.NoGyoumu.name},
          ${Tables.TenkenhyoGazou.columns.BridgeID.name},
          ${Tables.TenkenhyoGazou.columns.FlgTablet.name},
          ${Tables.TenkenhyoGazou.columns.GazouID.name},
          ${Tables.TenkenhyoGazou.columns.NoShashin.name},
          ${Tables.TenkenhyoGazou.columns.NameBuzai.name},
          ${Tables.TenkenhyoGazou.columns.NoBuzai.name},
          ${Tables.TenkenhyoGazou.columns.DamageShurui.name},
          ${Tables.TenkenhyoGazou.columns.Keikan.name},
          ${Tables.TenkenhyoGazou.columns.ShindanTenken.name},
          ${Tables.TenkenhyoGazou.columns.Bikou.name},
          ${Tables.TenkenhyoGazou.columns.HoushinChousa.name},
          ${Tables.TenkenhyoGazou.columns.HoushinSochi.name},
          ${Tables.TenkenhyoGazou.columns.NameFile.name},
          ${Tables.TenkenhyoGazou.columns.CodeDamageShurui.name},
          ${Tables.TenkenhyoGazou.columns.FlgDamage.name},
          ${Tables.TenkenhyoGazou.columns.FullPath.name}
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.TenkenhyoGazou.name}`
      },
      FullPath: {
        by: {
          NoGyoumu_BridgeID_GazouID_FlgTablet: {
            pure: `
              SELECT ${Tables.TenkenhyoGazou.columns.FullPath.name}
              FROM ${Tables.TenkenhyoGazou.name}
              WHERE 
                ${Tables.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenhyoGazou.columns.BridgeID.name} = ? AND
                ${Tables.TenkenhyoGazou.columns.GazouID.name} = ? AND
                ${Tables.TenkenhyoGazou.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      FullPath_HoushinChousa_HoushinSochi: {
        by: {
          NoGyoumu_BridgeID_GazouID_FlgTablet: {
            pure: `
              SELECT 
                ${Tables.TenkenhyoGazou.columns.FullPath.name},
                ${Tables.TenkenhyoGazou.columns.HoushinChousa.name},
                ${Tables.TenkenhyoGazou.columns.HoushinSochi.name}
              FROM ${Tables.TenkenhyoGazou.name}
              WHERE 
                ${Tables.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenhyoGazou.columns.BridgeID.name} = ? AND
                ${Tables.TenkenhyoGazou.columns.GazouID.name} = ? AND
                ${Tables.TenkenhyoGazou.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      GazouID_FullPath_NameBuzai_ShindanTenken_NameFile_Bikou: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            with: {
              GazouIDNoEqual0_FlgDamageEqual0: `
                SELECT 
                  ${Tables.TenkenhyoGazou.columns.GazouID.name},
                  ${Tables.TenkenhyoGazou.columns.FullPath.name},
                  ${Tables.TenkenhyoGazou.columns.NameBuzai.name},
                  ${Tables.TenkenhyoGazou.columns.ShindanTenken.name},
                  ${Tables.TenkenhyoGazou.columns.NameFile.name},
                  ${Tables.TenkenhyoGazou.columns.Bikou.name}
                FROM ${Tables.TenkenhyoGazou.name}
                WHERE 
                  ${Tables.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
                  ${Tables.TenkenhyoGazou.columns.BridgeID.name} = ? AND
                  ${Tables.TenkenhyoGazou.columns.FlgTablet.name} = ? AND
                  ${Tables.TenkenhyoGazou.columns.FlgDamage.name} = 0 AND
                  ${Tables.TenkenhyoGazou.columns.GazouID.name} <> 0
              `
            }
          }
        }
      }
    },
    update: {
      FullPath_HoushinChousa_HoushinSochi: {
        by: {
          NoGyoumu_BridgeID_FlgTablet_GazouID: {
            pure: `
              UPDATE 
                ${Tables.TenkenhyoGazou.name}
              SET 
                ${Tables.TenkenhyoGazou.columns.FullPath.name} = ?,
                ${Tables.TenkenhyoGazou.columns.HoushinChousa.name} = ?,
                ${Tables.TenkenhyoGazou.columns.HoushinSochi.name} = ?
              WHERE 
                ${Tables.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND 
                ${Tables.TenkenhyoGazou.columns.BridgeID.name} = ? AND 
                ${Tables.TenkenhyoGazou.columns.FlgTablet.name} = ? AND 
                ${Tables.TenkenhyoGazou.columns.GazouID.name} = ?
            `
          }
        }
      }
    },
    insert_update: {
      NoGyoumu_BridgeID_FlgTablet_GazouID_Bikou_FullPath_NameBuzai_NameFile_ShindanTenken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet_GazouID: {
            pure: `
              INSERT INTO ${Tables.TenkenhyoGazou.name} (
                ${Tables.TenkenhyoGazou.columns.NoGyoumu.name}, 
                ${Tables.TenkenhyoGazou.columns.BridgeID.name}, 
                ${Tables.TenkenhyoGazou.columns.FlgTablet.name}, 
                ${Tables.TenkenhyoGazou.columns.GazouID.name}, 
                ${Tables.TenkenhyoGazou.columns.Bikou.name}, 
                ${Tables.TenkenhyoGazou.columns.FullPath.name}, 
                ${Tables.TenkenhyoGazou.columns.NameBuzai.name}, 
                ${Tables.TenkenhyoGazou.columns.NameFile.name}, 
                ${Tables.TenkenhyoGazou.columns.ShindanTenken.name}
              ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(
                ${Tables.TenkenhyoGazou.columns.NoGyoumu.name}, 
                ${Tables.TenkenhyoGazou.columns.BridgeID.name}, 
                ${Tables.TenkenhyoGazou.columns.FlgTablet.name}, 
                ${Tables.TenkenhyoGazou.columns.GazouID.name}
              ) DO UPDATE SET
                ${Tables.TenkenhyoGazou.columns.Bikou.name} = ?, 
                ${Tables.TenkenhyoGazou.columns.FullPath.name} = ?, 
                ${Tables.TenkenhyoGazou.columns.NameBuzai.name} = ?, 
                ${Tables.TenkenhyoGazou.columns.NameFile.name} = ?, 
                ${Tables.TenkenhyoGazou.columns.ShindanTenken.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenhyoGazouTemp: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.TenkenhyoGazouTemp.name} (
          ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.type},
          ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} ${Tables.TenkenhyoGazouTemp.columns.BridgeID.type},
          ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.type},
          ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} ${Tables.TenkenhyoGazouTemp.columns.GazouID.type},
          ${Tables.TenkenhyoGazouTemp.columns.NoShashin.name} ${Tables.TenkenhyoGazouTemp.columns.NoShashin.type},
          ${Tables.TenkenhyoGazouTemp.columns.NameBuzai.name} ${Tables.TenkenhyoGazouTemp.columns.NameBuzai.type},
          ${Tables.TenkenhyoGazouTemp.columns.NoBuzai.name} ${Tables.TenkenhyoGazouTemp.columns.NoBuzai.type},
          ${Tables.TenkenhyoGazouTemp.columns.DamageShurui.name} ${Tables.TenkenhyoGazouTemp.columns.DamageShurui.type},
          ${Tables.TenkenhyoGazouTemp.columns.Keikan.name} ${Tables.TenkenhyoGazouTemp.columns.Keikan.type},
          ${Tables.TenkenhyoGazouTemp.columns.ShindanTenken.name} ${Tables.TenkenhyoGazouTemp.columns.ShindanTenken.type},
          ${Tables.TenkenhyoGazouTemp.columns.Bikou.name} ${Tables.TenkenhyoGazouTemp.columns.Bikou.type},
          ${Tables.TenkenhyoGazouTemp.columns.HoushinChousa.name} ${Tables.TenkenhyoGazouTemp.columns.HoushinChousa.type},
          ${Tables.TenkenhyoGazouTemp.columns.HoushinSochi.name} ${Tables.TenkenhyoGazouTemp.columns.HoushinSochi.type},
          ${Tables.TenkenhyoGazouTemp.columns.NameFile.name} ${Tables.TenkenhyoGazouTemp.columns.NameFile.type},
          ${Tables.TenkenhyoGazouTemp.columns.CodeDamageShurui.name} ${Tables.TenkenhyoGazouTemp.columns.CodeDamageShurui.type},
          ${Tables.TenkenhyoGazouTemp.columns.FlgDamage.name} ${Tables.TenkenhyoGazouTemp.columns.FlgDamage.type},
          ${Tables.TenkenhyoGazouTemp.columns.FullPath.name} ${Tables.TenkenhyoGazouTemp.columns.FullPath.type},
          PRIMARY KEY (
            ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
            ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name}, 
            ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name}, 
            ${Tables.TenkenhyoGazouTemp.columns.GazouID.name}
          )
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.TenkenhyoGazouTemp.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Tables.TenkenhyoGazouTemp.name} 
            WHERE 
              ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
              ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ?
          `,
          with: {
            FlgTabletEqual1_GazouIDNoEqual0: `
              DELETE FROM ${Tables.TenkenhyoGazouTemp.name} 
              WHERE 
                ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND
                ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
            `
          }
        },
        NoGyoumu_BridgeID_GazouID: {
          pure: `
              DELETE FROM ${Tables.TenkenhyoGazouTemp.name} 
              WHERE 
                ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = ?
            `
        }
      }
    },
    insert: {
      fullColumn: ``,
      NoGyoumu_BridgeID_GazouID_NoShashin_NameBuzai_NoBuzai_DamageShurui_Keikan_ShindanTenken_Bikou_HoushinChousa_HoushinSochi_NameFile: `
        INSERT INTO ${Tables.TenkenhyoGazouTemp.name} (
          ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.GazouID.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.NoShashin.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.NameBuzai.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.NoBuzai.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.DamageShurui.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.Keikan.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.ShindanTenken.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.Bikou.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.HoushinChousa.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.HoushinSochi.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.NameFile.name},
          ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      NoGyoumu_BridgeID_ShindanTenken_NameBuzai_CodeDamageShurui_DamageShurui_Bikou: `
        INSERT INTO ${Tables.TenkenhyoGazouTemp.name} (
          ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.ShindanTenken.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.NameBuzai.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.CodeDamageShurui.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.DamageShurui.name}, 
          ${Tables.TenkenhyoGazouTemp.columns.Bikou.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      NoGyoumu_BridgeID_FullPath: {
        with: {
          FlgTabletEqual0_GazouIDEqual0: `
            INSERT INTO ${Tables.TenkenhyoGazouTemp.name} (
              ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Tables.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Tables.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 0, 0)
          `,
          FlgTabletEqual1_GazouIDEqual0: `
            INSERT INTO ${Tables.TenkenhyoGazouTemp.name} (
              ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Tables.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Tables.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 1, 0)
          `,
          FlgTabletEqual0_GazouIDNoEqual0: `
            INSERT INTO ${Tables.TenkenhyoGazouTemp.name} (
              ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Tables.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Tables.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 0, ?)
          `,
          FlgTabletEqual1_GazouIDNoEqual0: `
            INSERT INTO ${Tables.TenkenhyoGazouTemp.name} (
              ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Tables.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Tables.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 1, ?)
          `
        }
      }
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.TenkenhyoGazouTemp.name}`,
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT * FROM ${Tables.TenkenhyoGazouTemp.name}
              WHERE 
                ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ?
            `
          }
        }
      },
      GazouID_NameFile_FullPath: {
        by: {
          NoGyoumu_BridgeID: {
            with: {
              FlgTabletEqual0_GazouIDEqual0: `
                SELECT 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Tables.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Tables.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `,
              FlgTabletEqual1_GazouIDEqual0: `
                SELECT 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Tables.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Tables.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `,
              FlgTabletEqual0_GazouIDNoEqual0: `
                SELECT 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Tables.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Tables.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
              `,
              FlgTabletEqual1_GazouIDNoEqual0: `
                SELECT 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Tables.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Tables.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
              `
            }
          }
        }
      },
      Bikou: {
        by: {
          NoGyoumu_BridgeID: {
            with: {
              FlgTabletEqual1_GazouIDNoEqual0: `
                SELECT
                  ${Tables.TenkenhyoGazouTemp.columns.Bikou.name}
                FROM 
                  ${Tables.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
              `
            }
          }
        }
      },
      ShindanTenken_NameBuzai_CodeDamageShurui_DamageShurui_Bikou: {
        by: {
          NoGyoumu_BridgeID_GazouID: {
            with: {
              FlgTabletEqual1: `
                SELECT
                  ${Tables.TenkenhyoGazouTemp.columns.ShindanTenken.name},
                  ${Tables.TenkenhyoGazouTemp.columns.NameBuzai.name},
                  ${Tables.TenkenhyoGazouTemp.columns.CodeDamageShurui.name},
                  ${Tables.TenkenhyoGazouTemp.columns.DamageShurui.name},
                  ${Tables.TenkenhyoGazouTemp.columns.Bikou.name}
                FROM 
                  ${Tables.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = ?
              `
            }
          }
        }
      }
    },
    update: {
      Bikou: {
        by: {
          NoGyoumu_BridgeID: {
            with: {
              FlgTabletEqual1_GazouIDNoEqual0: `
                UPDATE 
                  ${Tables.TenkenhyoGazouTemp.name}
                SET 
                  ${Tables.TenkenhyoGazouTemp.columns.Bikou.name} = ?
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
              `
            }
          }
        }
      },
      FullPath: {
        by: {
          NoGyoumu_BridgeID: {
            with: {
              FlgTabletEqual0_GazouIDEqual0: `
                UPDATE 
                  ${Tables.TenkenhyoGazouTemp.name}
                SET 
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `,
              FlgTabletEqual1_GazouIDEqual0: `
                UPDATE 
                  ${Tables.TenkenhyoGazouTemp.name}
                SET 
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `
            }
          },
          NoGyoumu_BridgeID_GazouID: {
            with: {
              FlgTabletEqual0: `
                UPDATE 
                  ${Tables.TenkenhyoGazouTemp.name}
                SET 
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = ?
              `,
              FlgTabletEqual1: `
                UPDATE 
                  ${Tables.TenkenhyoGazouTemp.name}
                SET 
                  ${Tables.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = ?
              `
            }
          }
        }
      },
      ShindanTenken_NoBuzai_NameBuzai_CodeDamageShurui_DamageShurui_Bikou: {
        by: {
          NoGyoumu_BridgeID_GazouID: {
            with: {
              FlgTabletEqual1: `
                UPDATE ${Tables.TenkenhyoGazouTemp.name}
                SET 
                  ${Tables.TenkenhyoGazouTemp.columns.ShindanTenken.name} = ?, 
                  ${Tables.TenkenhyoGazouTemp.columns.NoBuzai.name} = ?,
                  ${Tables.TenkenhyoGazouTemp.columns.NameBuzai.name} = ?,
                  ${Tables.TenkenhyoGazouTemp.columns.CodeDamageShurui.name} = ?,
                  ${Tables.TenkenhyoGazouTemp.columns.DamageShurui.name} = ?,
                  ${Tables.TenkenhyoGazouTemp.columns.Bikou.name} = ?
                WHERE 
                  ${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Tables.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Tables.TenkenhyoGazouTemp.columns.GazouID.name} = ?
              `
            }
          }
        }
      }
    }
  },
  TenkenhyoGenkyou: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.TenkenhyoGenkyou.name} (
          ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.name} ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.type},
          ${Tables.TenkenhyoGenkyou.columns.BridgeID.name} ${Tables.TenkenhyoGenkyou.columns.BridgeID.type},
          ${Tables.TenkenhyoGenkyou.columns.FlgTablet.name} ${Tables.TenkenhyoGenkyou.columns.FlgTablet.type},
          ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name} ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.type},
          ${Tables.TenkenhyoGenkyou.columns.GazouID.name} ${Tables.TenkenhyoGenkyou.columns.GazouID.type},
          ${Tables.TenkenhyoGenkyou.columns.NameFile.name} ${Tables.TenkenhyoGenkyou.columns.NameFile.type},
          ${Tables.TenkenhyoGenkyou.columns.FullPath.name} ${Tables.TenkenhyoGenkyou.columns.FullPath.type},
          PRIMARY KEY (
            ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.name}, 
            ${Tables.TenkenhyoGenkyou.columns.BridgeID.name}, 
            ${Tables.TenkenhyoGenkyou.columns.FlgTablet.name}, 
            ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
            ${Tables.TenkenhyoGenkyou.columns.GazouID.name}
          )
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.TenkenhyoGenkyou.name}`
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Tables.TenkenhyoGenkyou.name} (
          ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.name},
          ${Tables.TenkenhyoGenkyou.columns.BridgeID.name},
          ${Tables.TenkenhyoGenkyou.columns.FlgTablet.name},
          ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
          ${Tables.TenkenhyoGenkyou.columns.NameFile.name},
          ${Tables.TenkenhyoGenkyou.columns.FullPath.name}
        ) VALUES (?, ?, ?, ?, ?, ?)
      `
    },
    select: {
      all: {
        pure: ``
      },
      FlgTablet_CodeGenkyouShurui_GazouID_NameFile_FullPath: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT
                ${Tables.TenkenhyoGenkyou.columns.FlgTablet.name},
                ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
                ${Tables.TenkenhyoGenkyou.columns.GazouID.name},
                ${Tables.TenkenhyoGenkyou.columns.NameFile.name},
                ${Tables.TenkenhyoGenkyou.columns.FullPath.name}
              FROM 
                ${Tables.TenkenhyoGenkyou.name}
              WHERE 
                ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.name} = ? AND
                ${Tables.TenkenhyoGenkyou.columns.BridgeID.name} = ?
            `
          }
        }
      }
    },
    insert_update: {
      FullPath: {
        by: {
          NoGyoumu_BridgeID_FlgTablet_CodeGenkyouShurui_NameFile: {
            pure: `
              INSERT INTO ${Tables.TenkenhyoGenkyou.name} (
                ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.name}, 
                ${Tables.TenkenhyoGenkyou.columns.BridgeID.name}, 
                ${Tables.TenkenhyoGenkyou.columns.FlgTablet.name}, 
                ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
                ${Tables.TenkenhyoGenkyou.columns.NameFile.name},
                ${Tables.TenkenhyoGenkyou.columns.FullPath.name}
              ) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT (
                ${Tables.TenkenhyoGenkyou.columns.NoGyoumu.name}, 
                ${Tables.TenkenhyoGenkyou.columns.BridgeID.name}, 
                ${Tables.TenkenhyoGenkyou.columns.FlgTablet.name}, 
                ${Tables.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
                ${Tables.TenkenhyoGenkyou.columns.GazouID.name}
              ) DO UPDATE SET
                ${Tables.TenkenhyoGenkyou.columns.NameFile.name} = ?,
                ${Tables.TenkenhyoGenkyou.columns.FullPath.name} = ?
            `
          }
        }
      }
    }
  },
  MBuzaiZairyou: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MBuzaiZairyou.name} (
          ${Tables.MBuzaiZairyou.columns.NoGyoumu.name} ${Tables.MBuzaiZairyou.columns.NoGyoumu.type},
          ${Tables.MBuzaiZairyou.columns.CodeBuzaiZairyou.name} ${Tables.MBuzaiZairyou.columns.CodeBuzaiZairyou.type},
          ${Tables.MBuzaiZairyou.columns.NameBuzaiZairyou.name} ${Tables.MBuzaiZairyou.columns.NameBuzaiZairyou.type},
          PRIMARY KEY (${Tables.MBuzaiZairyou.columns.NoGyoumu.name}, ${Tables.MBuzaiZairyou.columns.CodeBuzaiZairyou.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MBuzaiZairyou.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Tables.MBuzaiZairyou.name} (${Tables.MBuzaiZairyou.columns.CodeBuzaiZairyou.name}, ${Tables.MBuzaiZairyou.columns.NameBuzaiZairyou.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeBuzaiZairyou_NameBuzaiZairyou: {
        pure: `SELECT ${Tables.MBuzaiZairyou.columns.CodeBuzaiZairyou.name}, ${Tables.MBuzaiZairyou.columns.NameBuzaiZairyou.name} FROM ${Tables.MBuzaiZairyou.name}`
      }
    }
  },
  MDamageShurui: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MDamageShurui.name} (
          ${Tables.MDamageShurui.columns.NoGyoumu.name} ${Tables.MDamageShurui.columns.NoGyoumu.type},
          ${Tables.MDamageShurui.columns.CodeDamageShurui.name} ${Tables.MDamageShurui.columns.CodeDamageShurui.type},
          ${Tables.MDamageShurui.columns.NameDamageShurui.name} ${Tables.MDamageShurui.columns.CodeDamageShurui.type},
          PRIMARY KEY (${Tables.MDamageShurui.columns.NoGyoumu.name}, ${Tables.MDamageShurui.columns.CodeDamageShurui.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MDamageShurui.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Tables.MDamageShurui.name} (${Tables.MDamageShurui.columns.CodeDamageShurui.name}, ${Tables.MDamageShurui.columns.NameDamageShurui.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeDamageShurui_NameDamageShurui: {
        pure: `SELECT ${Tables.MDamageShurui.columns.CodeDamageShurui.name}, ${Tables.MDamageShurui.columns.NameDamageShurui.name} FROM ${Tables.MDamageShurui.name}`
      }
    }
  },
  MGenkyouShurui: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MGenkyouShurui.name} (
          ${Tables.MGenkyouShurui.columns.NoGyoumu.name} ${Tables.MGenkyouShurui.columns.NoGyoumu.type},
          ${Tables.MGenkyouShurui.columns.CodeGenkyouShurui.name} ${Tables.MGenkyouShurui.columns.CodeGenkyouShurui.type},
          ${Tables.MGenkyouShurui.columns.NameGenkyouShurui.name} ${Tables.MGenkyouShurui.columns.NameGenkyouShurui.type},
          PRIMARY KEY (${Tables.MGenkyouShurui.columns.NoGyoumu.name}, ${Tables.MGenkyouShurui.columns.CodeGenkyouShurui.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MGenkyouShurui.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `
        INSERT INTO ${Tables.MGenkyouShurui.name} (
          ${Tables.MGenkyouShurui.columns.CodeGenkyouShurui.name}, 
          ${Tables.MGenkyouShurui.columns.NameGenkyouShurui.name}
        ) VALUES (?, ?)
      `
    },
    select: {
      all: {
        pure: ``
      },
      CodeGenkyouShurui_NameGenkyouShurui: {
        orderBy: {
          CodeGenkyouShurui: {
            pure: `
              SELECT 
                ${Tables.MGenkyouShurui.columns.CodeGenkyouShurui.name},
                ${Tables.MGenkyouShurui.columns.NameGenkyouShurui.name}
              FROM 
                ${Tables.MGenkyouShurui.name}
              ORDER BY
                ${Tables.MGenkyouShurui.columns.CodeGenkyouShurui.name}
            `
          }
        }
      }
    }
  },
  MShindan: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MShindan.name} (
          ${Tables.MShindan.columns.NoGyoumu.name} ${Tables.MShindan.columns.NoGyoumu.type},
          ${Tables.MShindan.columns.CodeShindan.name} ${Tables.MShindan.columns.CodeShindan.type},
          ${Tables.MShindan.columns.NameShindan.name} ${Tables.MShindan.columns.NameShindan.type},
          PRIMARY KEY (${Tables.MShindan.columns.NoGyoumu.name}, ${Tables.MShindan.columns.CodeShindan.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MShindan.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Tables.MShindan.name} (${Tables.MShindan.columns.CodeShindan.name}, ${Tables.MShindan.columns.NameShindan.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeShindan_NameShindan: {
        pure: `SELECT ${Tables.MShindan.columns.CodeShindan.name}, ${Tables.MShindan.columns.NameShindan.name} FROM ${Tables.MShindan.name}`
      }
    }
  },
  MTenkenShokenTemplate: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MTenkenShokenTemplate.name} (
          ${Tables.MTenkenShokenTemplate.columns.NoGyoumu.name} ${Tables.MTenkenShokenTemplate.columns.NoGyoumu.type},
          ${Tables.MTenkenShokenTemplate.columns.CodeTenkenShokenTemplate.name} ${Tables.MTenkenShokenTemplate.columns.CodeTenkenShokenTemplate.type},
          ${Tables.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.name} ${Tables.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.type},
          ${Tables.MTenkenShokenTemplate.columns.CodeDamageShurui.name} ${Tables.MTenkenShokenTemplate.columns.CodeDamageShurui.type},
          ${Tables.MTenkenShokenTemplate.columns.CodeShindan.name} ${Tables.MTenkenShokenTemplate.columns.CodeShindan.type},
          ${Tables.MTenkenShokenTemplate.columns.Shoken.name} ${Tables.MTenkenShokenTemplate.columns.Shoken.type},
          PRIMARY KEY (${Tables.MTenkenShokenTemplate.columns.NoGyoumu.name}, ${Tables.MTenkenShokenTemplate.columns.CodeTenkenShokenTemplate.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MTenkenShokenTemplate.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.MTenkenShokenTemplate.name} VALUES (?, ?, ?, ?, ?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeBuzaiZairyou_CodeDamageShurui_CodeShindan_Shoken: {
        pure: `
          SELECT 
            ${Tables.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.name}, 
            ${Tables.MTenkenShokenTemplate.columns.CodeDamageShurui.name},
            ${Tables.MTenkenShokenTemplate.columns.CodeShindan.name},
            ${Tables.MTenkenShokenTemplate.columns.Shoken.name}
          FROM
            ${Tables.MTenkenShokenTemplate.name}
        `
      },
      Shoken: {
        by: {
          CodeBuzaiZairyou_CodeDamageShurui_CodeShindan: {
            pure: `
              SELECT 
                ${Tables.MTenkenShokenTemplate.columns.Shoken.name}
              FROM
                ${Tables.MTenkenShokenTemplate.name}
              WHERE
                ${Tables.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.name} IN (?, 0) AND
                ${Tables.MTenkenShokenTemplate.columns.CodeDamageShurui.name} IN (?, 0) AND
                ${Tables.MTenkenShokenTemplate.columns.CodeShindan.name} = ?
            `
          }
        }
      }
    }
  },
  MTenkenHanrei: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MTenkenHanrei.name} (
          ${Tables.MTenkenHanrei.columns.CodeBuzaiZairyou.name} ${Tables.MTenkenHanrei.columns.CodeBuzaiZairyou.type},
          ${Tables.MTenkenHanrei.columns.CodeDamageShuruiTablet.name} ${Tables.MTenkenHanrei.columns.CodeDamageShuruiTablet.type},
          ${Tables.MTenkenHanrei.columns.CodeShindan.name} ${Tables.MTenkenHanrei.columns.CodeShindan.type},
          ${Tables.MTenkenHanrei.columns.NoFile.name} ${Tables.MTenkenHanrei.columns.NoFile.type},
          ${Tables.MTenkenHanrei.columns.NameFile.name} ${Tables.MTenkenHanrei.columns.NameFile.type},
          PRIMARY KEY (${Tables.MTenkenHanrei.columns.CodeBuzaiZairyou.name}, ${Tables.MTenkenHanrei.columns.CodeDamageShuruiTablet.name}, ${Tables.MTenkenHanrei.columns.CodeShindan.name}, ${Tables.MTenkenHanrei.columns.NoFile.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MTenkenHanrei.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.MTenkenHanrei.name} VALUES (?, ?, ?, ?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeBuzaiZairyou_CodeDamageShuruiTablet_CodeShindan: {
        pure: `
          SELECT 
            ${Tables.MTenkenHanrei.columns.CodeBuzaiZairyou.name},
            ${Tables.MTenkenHanrei.columns.CodeDamageShuruiTablet.name},
            ${Tables.MTenkenHanrei.columns.CodeShindan.name}
          FROM 
          ${Tables.MTenkenHanrei.name}
        `
      },
      NoFile_NameFile: {
        by: {
          CodeBuzaiZairyou_CodeDamageShuruiTablet_CodeShindan: {
            orderBy: {
              NoFile: {
                asc: `
                  SELECT 
                    ${Tables.MTenkenHanrei.columns.NoFile.name},
                    ${Tables.MTenkenHanrei.columns.NameFile.name}
                  FROM 
                    ${Tables.MTenkenHanrei.name}
                  WHERE 
                    ${Tables.MTenkenHanrei.columns.CodeBuzaiZairyou.name} = ? AND
                    ${Tables.MTenkenHanrei.columns.CodeDamageShuruiTablet.name} = ? AND
                    ${Tables.MTenkenHanrei.columns.CodeShindan.name} = ?
                  ORDER BY 
                    ${Tables.MTenkenHanrei.columns.NoFile.name} ASC
                `
              }
            }
          }
        }
      }
    }
  },
  MDamageShuruiTablet: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MDamageShuruiTablet.name} (
          ${Tables.MDamageShuruiTablet.columns.CodeDamageShuruiTablet.name} ${Tables.MDamageShuruiTablet.columns.CodeDamageShuruiTablet.type},
          ${Tables.MDamageShuruiTablet.columns.NameDamageShuruiTablet.name} ${Tables.MDamageShuruiTablet.columns.NameDamageShuruiTablet.type},
          PRIMARY KEY (${Tables.MDamageShuruiTablet.columns.CodeDamageShuruiTablet.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MDamageShuruiTablet.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.MDamageShuruiTablet.name} VALUES (?, ?)`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.MDamageShuruiTablet.name}`
      }
    }
  },
  MBuzaiTenkenhyo: {
    create: {
      Table: `
        CREATE TABLE IF NOT EXISTS ${Tables.MBuzaiTenkenhyo.name} (
          ${Tables.MBuzaiTenkenhyo.columns.CodeBuzaiTenkenhyo.name} ${Tables.MBuzaiTenkenhyo.columns.CodeBuzaiTenkenhyo.type},
          ${Tables.MBuzaiTenkenhyo.columns.NameBuzaiTenkenhyo.name} ${Tables.MBuzaiTenkenhyo.columns.NameBuzaiTenkenhyo.type},
          PRIMARY KEY (${Tables.MBuzaiTenkenhyo.columns.CodeBuzaiTenkenhyo.name})
        )
      `
    },
    delete: {
      Table: `DELETE FROM ${Tables.MBuzaiTenkenhyo.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Tables.MBuzaiTenkenhyo.name} VALUES (?, ?)`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Tables.MBuzaiTenkenhyo.name}`
      }
    }
  },

  // ========================================================================================
  // ========================================================================================
  // for multi Tables ========================================================================
  // ========================================================================================
  // ========================================================================================
  select: {
    CodeBridge_BridgeID_NameShisetsu_IdoStartTenken_KeidoStartTenken_FlgCalvert_CodeShindan_NameShindan: {
      by: {
        NoGyoumu: {
          pure: `
          SELECT
            T1.${Tables.Bridge.columns.CodeBridge.name},
            T1.${Tables.Bridge.columns.BridgeID.name},
            T1.${Tables.Bridge.columns.NameShisetsu.name},
            T2.${Tables.TenkenRireki.columns.IdoStartTenken.name},
            T2.${Tables.TenkenRireki.columns.KeidoStartTenken.name},
            T1.${Tables.Bridge.columns.FlgCalvert.name},
            T2.${Tables.TenkenRireki.columns.FlgTablet.name},
            T3.${Tables.MShindan.columns.CodeShindan.name},
            T3.${Tables.MShindan.columns.NameShindan.name}
          FROM
            (${Tables.Bridge.name} AS T1 LEFT JOIN
            ${Tables.TenkenRireki.name} AS T2 ON
              T1.${Tables.Bridge.columns.NoGyoumu.name} = T2.${Tables.TenkenRireki.columns.NoGyoumu.name} AND
              T1.${Tables.Bridge.columns.BridgeID.name} = T2.${Tables.TenkenRireki.columns.BridgeID.name}) LEFT JOIN
            ${Tables.MShindan.name} AS T3 ON
              T2.${Tables.TenkenRireki.columns.ShindanTenken.name} = T3.${Tables.MShindan.columns.CodeShindan.name}
          WHERE
            T1.${Tables.Bridge.columns.NoGyoumu.name} = ?
        `
        }
      }
    },
    NameShisetsuTenken_NameRosen_NameSoshiki_NameTenkensha_NengappiTenken: {
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            SELECT 
              T2.${Tables.TenkenRirekiTemp.columns.NameShisetsuTenken.name},
              T1.${Tables.Bridge.columns.NameRosen.name},
              T1.${Tables.Bridge.columns.NameSoshiki.name},
              T2.${Tables.TenkenRirekiTemp.columns.NameTenkensha.name},
              T2.${Tables.TenkenRirekiTemp.columns.NengappiTenken.name}
            FROM 
              ${Tables.Bridge.name} AS T1 LEFT JOIN 
              ${Tables.TenkenRirekiTemp.name} AS T2
            ON 
              T1.${Tables.Bridge.columns.NoGyoumu.name} = T2.${Tables.TenkenRirekiTemp.columns.NoGyoumu.name} AND 
              T1.${Tables.Bridge.columns.BridgeID.name} = T2.${Tables.TenkenRirekiTemp.columns.BridgeID.name}
            WHERE 
              T1.${Tables.Bridge.columns.NoGyoumu.name} = ? AND
              T1.${Tables.Bridge.columns.BridgeID.name} = ?
          `
        }
      }
    },
    NameShisetsuTenken_NameRosen_IdoStartTenken_KeidoStartTenken_BridgeIDTenken_Shozaichi1Ji_NameSoshiki_NengappiTenken: {
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            SELECT 
              T2.${Tables.TenkenRireki.columns.NameShisetsuTenken.name},
              T1.${Tables.Bridge.columns.NameRosen.name},
              T2.${Tables.TenkenRireki.columns.IdoStartTenken.name},
              T2.${Tables.TenkenRireki.columns.KeidoStartTenken.name},
              T1.${Tables.Bridge.columns.BridgeIDTenken.name},
              T1.${Tables.Bridge.columns.Shozaichi1Ji.name},
              T1.${Tables.Bridge.columns.NameSoshiki.name},
              T2.${Tables.TenkenRireki.columns.NengappiTenken.name}
            FROM 
              ${Tables.Bridge.name} AS T1 LEFT JOIN 
              ${Tables.TenkenRireki.name} AS T2
            ON 
              T1.${Tables.Bridge.columns.NoGyoumu.name} = T2.${Tables.TenkenRireki.columns.NoGyoumu.name} AND 
              T1.${Tables.Bridge.columns.BridgeID.name} = T2.${Tables.TenkenRireki.columns.BridgeID.name}
            WHERE 
              T1.${Tables.Bridge.columns.NoGyoumu.name} = ? AND
              T1.${Tables.Bridge.columns.BridgeID.name} = ?
          `,
          with: {
            FlgTabletEqual1: `
              SELECT 
                T2.${Tables.TenkenRireki.columns.NameShisetsuTenken.name},
                T1.${Tables.Bridge.columns.NameRosen.name},
                T2.${Tables.TenkenRireki.columns.IdoStartTenken.name},
                T2.${Tables.TenkenRireki.columns.KeidoStartTenken.name},
                T1.${Tables.Bridge.columns.BridgeIDTenken.name},
                T1.${Tables.Bridge.columns.Shozaichi1Ji.name},
                T1.${Tables.Bridge.columns.NameSoshiki.name},
                T2.${Tables.TenkenRireki.columns.NengappiTenken.name}
              FROM 
                ${Tables.TenkenRireki.name} AS T2 LEFT JOIN 
                ${Tables.Bridge.name} AS T1 
              ON 
                T1.${Tables.Bridge.columns.NoGyoumu.name} = T2.${Tables.TenkenRireki.columns.NoGyoumu.name} AND 
                T1.${Tables.Bridge.columns.BridgeID.name} = T2.${Tables.TenkenRireki.columns.BridgeID.name}
              WHERE 
                T1.${Tables.Bridge.columns.NoGyoumu.name} = ? AND
                T1.${Tables.Bridge.columns.BridgeID.name} = ? AND
                T2.${Tables.TenkenRireki.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    },
    TableTenkenhyoGazouTemp_NameDamageShurui: {
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            SELECT 
              T1.*, T2.${Tables.MDamageShurui.columns.NameDamageShurui.name}
            FROM 
              ${Tables.TenkenhyoGazouTemp.name} AS T1 LEFT JOIN
              ${Tables.MDamageShurui.name} AS T2
            ON 
              T1.${Tables.TenkenhyoGazouTemp.columns.CodeDamageShurui.name} = T2.${Tables.MDamageShurui.columns.CodeDamageShurui.name}
            WHERE 
              T1.${Tables.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
              T1.${Tables.TenkenhyoGazouTemp.columns.BridgeID.name} = ?
          `
        }
      }
    },
    NameTenkensha_ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihentei: {
      by: {
        NoGyoumu_BridgeID: {
          with: {
            FlgTabletEqual1: `
              SELECT 
                T1.${Tables.TenkenRireki.columns.NameTenkensha.name},
                T2.${Tables.BuzaiHyouka.columns.ShindanTenken.name},
                T2.${Tables.BuzaiHyouka.columns.CodeHenjouTenken.name},
                T2.${Tables.BuzaiHyouka.columns.BikouTenken.name},
                T2.${Tables.BuzaiHyouka.columns.ShindanSochigo.name},
                T2.${Tables.BuzaiHyouka.columns.CodeHenjouSochigo.name},
                T2.${Tables.BuzaiHyouka.columns.NengappiSaihantei.name}
              FROM 
                ${Tables.TenkenRireki.name} AS T1 LEFT JOIN 
                ${Tables.BuzaiHyouka.name} AS T2 
              ON 
                T1.${Tables.TenkenRireki.columns.NoGyoumu.name} = T2.${Tables.BuzaiHyouka.columns.NoGyoumu.name} AND 
                T1.${Tables.TenkenRireki.columns.BridgeID.name} = T2.${Tables.BuzaiHyouka.columns.BridgeID.name}
              WHERE
                T1.${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND 
                T1.${Tables.TenkenRireki.columns.BridgeID.name} = ? AND
                T1.${Tables.TenkenRireki.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    },
    ShindanTenken_Shoken_HoushinSochi_NenKasetsu_BridgeLength_WidthZen_BridgeKeishiki: {
      by: {
        NoGyoumu_BridgeID: {
          with: {
            FlgTabletEqual1: `
              SELECT 
                T1.${Tables.TenkenRireki.columns.ShindanTenken.name},
                T1.${Tables.TenkenRireki.columns.Shoken.name},
                T2.${Tables.TenkenhyoGazou.columns.HoushinChousa.name},
                T2.${Tables.TenkenhyoGazou.columns.HoushinSochi.name},
                T3.${Tables.Bridge.columns.NenKasetsu.name},
                T3.${Tables.Bridge.columns.BridgeLength.name},
                T3.${Tables.Bridge.columns.WidthZen.name},
                T3.${Tables.Bridge.columns.BridgeKeishiki.name}
              FROM 
                ${Tables.TenkenRireki.name} AS T1 LEFT JOIN 
                ${Tables.TenkenhyoGazou.name} AS T2 LEFT JOIN
                ${Tables.Bridge.name} AS T3
              ON 
                T1.${Tables.TenkenRireki.columns.NoGyoumu.name} = T3.${Tables.Bridge.columns.NoGyoumu.name} AND 
                T1.${Tables.TenkenRireki.columns.BridgeID.name} = T3.${Tables.Bridge.columns.BridgeID.name} AND
                T1.${Tables.TenkenRireki.columns.NoGyoumu.name} = T2.${Tables.TenkenhyoGazou.columns.NoGyoumu.name} AND 
                T1.${Tables.TenkenRireki.columns.BridgeID.name} = T2.${Tables.TenkenhyoGazou.columns.BridgeID.name}
              WHERE
                T1.${Tables.TenkenRireki.columns.NoGyoumu.name} = ? AND 
                T1.${Tables.TenkenRireki.columns.BridgeID.name} = ? AND
                T1.${Tables.TenkenRireki.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    }
  }
}

export default QueryStrings
