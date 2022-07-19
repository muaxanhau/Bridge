const Config = {
  name: 'data.db',
  location: 'default'
}

const Table = {
  LoginUser: {
    name: 'LOGIN_USER',
    columns: {
      LoginID: {
        name: 'LOGIN_ID',
        type: 'VARCHAR(20)'
      },
      Password: {
        name: 'PASSWORD',
        type: 'VARCHAR(20)'
      }
    }
  },
  MGyoumu: {
    name: 'M_GYOUMU',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      Nendo: {
        name: 'NENDO',
        type: 'INTEGER'
      },
      NameGyoumu: {
        name: 'NAME_GYOUMU',
        type: 'VARCHAR(100)'
      }
    }
  },
  Bridge: {
    name: 'BRIDGE',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      CodeBridge: {
        name: 'CODE_BRIDGE',
        type: 'VARCHAR(30)'
      },
      BridgeIDTenken: {
        name: 'BRIDGE_ID_TENKEN',
        type: 'VARCHAR(18)'
      },
      NameShisetsu: {
        name: 'NAME_SHISETSU',
        type: 'VARCHAR(50)'
      },
      NameShisetsuKana: {
        name: 'NAME_SHISETSU_KANA',
        type: 'VARCHAR(100)'
      },
      NameRosen: {
        name: 'NAME_ROSEN',
        type: 'VARCHAR(100)'
      },
      Shozaichi1Ji: {
        name: 'SHOZAICHI1_JI',
        type: 'VARCHAR(255)'
      },
      Shozaichi1Itaru: {
        name: 'SHOZAICHI1_ITARU',
        type: 'VARCHAR(255)'
      },
      NameSoshiki: {
        name: 'NAME_SOSHIKI',
        type: 'VARCHAR(100)'
      },
      RokaJouken: {
        name: 'ROKA_JOUKEN',
        type: 'VARCHAR(500)'
      },
      Ukairo: {
        name: 'UKAIRO',
        type: 'VARCHAR(50)'
      },
      NameJisenIppan: {
        name: 'NAME_JISEN_IPPAN',
        type: 'VARCHAR(50)'
      },
      NameKinkyuyuso: {
        name: 'NAME_KINKYUYUSO',
        type: 'VARCHAR(50)'
      },
      SenyuBukken: {
        name: 'SENYU_BUKKEN',
        type: 'VARCHAR(100)'
      },
      NenKasetsu: {
        name: 'NEN_KASETSU',
        type: 'VARCHAR(50)'
      },
      BridgeLength: {
        name: 'BRIDGE_LENGTH',
        type: 'DECIMAL(8, 3)'
      },
      WidthZen: {
        name: 'WIDTH_ZEN',
        type: 'DECIMAL(8, 3)'
      },
      BridgeKeishiki: {
        name: 'BRIDGE_KEISHIKI',
        type: 'VARCHAR(200)'
      },
      KyoriJi: {
        name: 'KYORI_JI',
        type: 'INTEGER'
      },
      KyoriItaru: {
        name: 'KYORI_ITARU',
        type: 'INTEGER'
      },
      FlgCalvert: {
        name: 'FLG_CALVERT',
        type: 'INTEGER'
      }
    }
  },
  TenkenRireki: {
    name: 'TENKEN_RIREKI',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      FlgTablet: {
        name: 'FLG_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      NengappiTenken: {
        name: 'NENGAPPI_TENKEN',
        type: 'VARCHAR(8)'
      },
      NameTenkensha: {
        name: 'NAME_TENKENSHA',
        type: 'VARCHAR(50)'
      },
      ShindanTenken: {
        name: ' SHINDAN_TENKEN',
        type: 'INTEGER'
      },
      Shoken: {
        name: 'SHOKEN',
        type: 'VARCHAR(500)'
      },
      NameShisetsuTenken: {
        name: 'NAME_SHISETSU_TENKEN',
        type: 'VARCHAR(100)'
      },
      NameShisetsuKanaTenken: {
        name: 'NAME_SHISETSU_KANA_TENKEN',
        type: 'VARCHAR(200)'
      },
      IdoStartTenken: {
        name: 'IDO_START_TENKEN',
        type: 'VARCHAR(50)'
      },
      KeidoStartTenken: {
        name: 'KEIDO_START_TENKEN',
        type: 'VARCHAR(50)'
      },
      NengappiKoushin: {
        name: 'NENGAPPI_KOUSHIN',
        type: 'VARCHAR(8)'
      },
      Bikou: {
        name: 'BIKOU',
        type: 'TEXT'
      }
    }
  },
  TenkenRirekiTemp: {
    name: 'TENKEN_RIREKI_TEMP',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      FlgTablet: {
        name: 'FLG_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      NengappiTenken: {
        name: 'NENGAPPI_TENKEN',
        type: 'VARCHAR(8)'
      },
      NameTenkensha: {
        name: 'NAME_TENKENSHA',
        type: 'VARCHAR(50)'
      },
      ShindanTenken: {
        name: ' SHINDAN_TENKEN',
        type: 'INTEGER'
      },
      Shoken: {
        name: 'SHOKEN',
        type: 'VARCHAR(500)'
      },
      NameShisetsuTenken: {
        name: 'NAME_SHISETSU_TENKEN',
        type: 'VARCHAR(100)'
      },
      NameShisetsuKanaTenken: {
        name: 'NAME_SHISETSU_KANA_TENKEN',
        type: 'VARCHAR(200)'
      },
      IdoStartTenken: {
        name: 'IDO_START_TENKEN',
        type: 'VARCHAR(50)'
      },
      KeidoStartTenken: {
        name: 'KEIDO_START_TENKEN',
        type: 'VARCHAR(50)'
      },
      NengappiKoushin: {
        name: 'NENGAPPI_KOUSHIN',
        type: 'VARCHAR(8)'
      },
      Bikou: {
        name: 'BIKOU',
        type: 'TEXT'
      }
    }
  },
  BuzaiHyouka: {
    name: 'BUZAI_HYOUKA',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      FlgTablet: {
        name: 'FLG_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      NoBuzai: {
        name: 'NO_BUZAI', // PRIMARY KEY
        type: 'INTEGER'
      },
      ShindanTenken: {
        name: 'SHINDAN_TENKEN',
        type: 'INTEGER'
      },
      CodeHenjouTenken: {
        name: 'CODE_HENJOU_TENKEN',
        type: 'VARCHAR(255)'
      },
      BikouTenken: {
        name: 'BIKOU_TENKEN',
        type: 'VARCHAR(255)'
      },
      ShindanSochigo: {
        name: 'SHINDAN_SOCHIGO',
        type: 'INTEGER'
      },
      CodeHenjouSochigo: {
        name: 'CODE_HENJOU_SOCHIGO',
        type: 'VARCHAR(255)'
      },
      NengappiSaihantei: {
        name: 'NENGAPPI_SAIHANTEI',
        type: 'VARCHAR(8)'
      }
    }
  },
  TenkenhyoGazou: {
    name: 'TENKENHYO_GAZOU',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      FlgTablet: {
        name: 'FLG_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      GazouID: {
        name: 'GAZOU_ID', // PRIMARY KEY
        type: 'INTEGER'
      },
      NoShashin: {
        name: 'NO_SHASHIN',
        type: 'VARCHAR(50)'
      },
      NameBuzai: {
        name: 'NAME_BUZAI',
        type: 'VARCHAR(50)'
      },
      NoBuzai: {
        name: 'NO_BUZAI',
        type: 'VARCHAR(100)'
      },
      DamageShurui: {
        name: 'DAMAGE_SHURUI',
        type: 'VARCHAR(50)'
      },
      Keikan: {
        name: 'KEIKAN',
        type: 'VARCHAR(50)'
      },
      ShindanTenken: {
        name: 'SHINDAN_TENKEN',
        type: 'INTEGER'
      },
      Bikou: {
        name: 'BIKOU',
        type: 'TEXT'
      },
      HoushinChousa: {
        name: 'HOUSHIN_CHOUSA',
        type: 'VARCHAR(255)'
      },
      HoushinSochi: {
        name: 'HOUSHIN_SOCHI',
        type: 'VARCHAR(255)'
      },
      NameFile: {
        name: 'NAME_FILE',
        type: 'VARCHAR(255)'
      },
      CodeDamageShurui: {
        name: 'CODE_DAMAGE_SHURUI',
        type: 'INTEGER'
      },
      FlgDamage: {
        name: 'FLG_DAMAGE',
        type: 'INTEGER'
      },
      FullPath: {
        name: 'FULL_PATH',
        type: 'TEXT'
      }
    }
  },
  TenkenhyoGazouTemp: {
    name: 'TENKENHYO_GAZOU_TEMP',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      FlgTablet: {
        name: 'FLG_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      GazouID: {
        name: 'GAZOU_ID', // PRIMARY KEY
        type: 'INTEGER'
      },
      NoShashin: {
        name: 'NO_SHASHIN',
        type: 'VARCHAR(50)'
      },
      NameBuzai: {
        name: 'NAME_BUZAI',
        type: 'VARCHAR(50)'
      },
      NoBuzai: {
        name: 'NO_BUZAI',
        type: 'VARCHAR(100)'
      },
      DamageShurui: {
        name: 'DAMAGE_SHURUI',
        type: 'VARCHAR(50)'
      },
      Keikan: {
        name: 'KEIKAN',
        type: 'VARCHAR(50)'
      },
      ShindanTenken: {
        name: 'SHINDAN_TENKEN',
        type: 'INTEGER'
      },
      Bikou: {
        name: 'BIKOU',
        type: 'TEXT'
      },
      HoushinChousa: {
        name: 'HOUSHIN_CHOUSA',
        type: 'VARCHAR(255)'
      },
      HoushinSochi: {
        name: 'HOUSHIN_SOCHI',
        type: 'VARCHAR(255)'
      },
      NameFile: {
        name: 'NAME_FILE',
        type: 'VARCHAR(255)'
      },
      CodeDamageShurui: {
        name: 'CODE_DAMAGE_SHURUI',
        type: 'INTEGER'
      },
      FlgDamage: {
        name: 'FLG_DAMAGE',
        type: 'INTEGER'
      },
      FullPath: {
        name: 'FULL_PATH',
        type: 'TEXT'
      }
    }
  },
  TenkenhyoGenkyou: {
    name: 'TENKENHYO_GENKYOU',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      BridgeID: {
        name: 'BRIDGE_ID', // PRIMARY KEY
        type: 'VARCHAR(50)'
      },
      FlgTablet: {
        name: 'FLG_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeGenkyouShurui: {
        name: 'CODE_GENKYOU_SHURUI', // PRIMARY KEY
        type: 'INTEGER'
      },
      GazouID: {
        name: 'GAZOU_ID',
        type: 'INTEGER'
      },
      NameFile: {
        name: 'NAME_FILE', // PRIMARY KEY
        type: 'VARCHAR(255)'
      },
      FullPath: {
        name: 'FULL_PATH',
        type: 'TEXT'
      }
    }
  },
  MBuzaiZairyou: {
    name: 'M_BUZAI_ZAIRYOU',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeBuzaiZairyou: {
        name: 'CODE_BUZAI_ZAIRYOU', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameBuzaiZairyou: {
        name: 'NAME_BUZAI_ZAIRYOU',
        type: 'varchar(50)'
      }
    }
  },
  MDamageShurui: {
    name: 'M_DAMAGE_SHURUI',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeDamageShurui: {
        name: 'CODE_DAMAGE_SHURUI', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameDamageShurui: {
        name: 'NAME_DAMAGE_SHURUI',
        type: 'varchar(50)'
      }
    }
  },
  MGenkyouShurui: {
    name: 'M_GENKYOU_SHURUI',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeGenkyouShurui: {
        name: 'CODE_GENKYOU_SHURUI', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameGenkyouShurui: {
        name: 'NAME_GENKYOU_SHURUI',
        type: 'varchar(50)'
      }
    }
  },
  MShindan: {
    name: 'M_Shindan',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeShindan: {
        name: 'CODE_SHINDAN', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameShindan: {
        name: 'NAME_SHINDAN',
        type: 'varchar(50)'
      }
    }
  },
  MTenkenShokenTemplate: {
    name: 'M_TENKEN_SHOKEN_TEMPLATE',
    columns: {
      NoGyoumu: {
        name: 'NO_GYOUMU', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeTenkenShokenTemplate: {
        name: 'CODE_TENKEN_SHOKEN_TEMPLATE', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeBuzaiZairyou: {
        name: 'CODE_BUZAI_ZAIRYOU',
        type: 'INTEGER'
      },
      CodeDamageShurui: {
        name: 'CODE_DAMAGE_SHURUI',
        type: 'INTEGER'
      },
      CodeShindan: {
        name: 'CODE_SHINDAN',
        type: 'INTEGER'
      },
      Shoken: {
        name: 'SHOKEN',
        type: 'VARCHAR(500)'
      }
    }
  },
  MTenkenHanrei: {
    name: 'M_TENKEN_HANREI',
    columns: {
      CodeBuzaiZairyou: {
        name: 'CODE_BUZAI_ZAIRYOU', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeDamageShuruiTablet: {
        name: 'CODE_DAMAGE_SHURUI_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      CodeShindan: {
        name: 'CODE_SHINDAN', // PRIMARY KEY
        type: 'INTEGER'
      },
      NoFile: {
        name: 'NO_FILE', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameFile: {
        name: 'NAME_FILE',
        type: 'VARCHAR(50)'
      }
    }
  },
  MDamageShuruiTablet: {
    name: 'M_DAMAGE_SHURUI_TABLET',
    columns: {
      CodeDamageShuruiTablet: {
        name: 'CODE_DAMAGE_SHURUI_TABLET', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameDamageShuruiTablet: {
        name: 'NAME_DAMAGE_SHURUI_TABLET',
        type: 'VARCHAR(50)'
      }
    }
  },
  MBuzaiTenkenhyo: {
    name: 'M_BUZAI_TENKENHYO',
    columns: {
      CodeBuzaiTenkenhyo: {
        name: 'CODE_BUZAI_TENKENHYO', // PRIMARY KEY
        type: 'INTEGER'
      },
      NameBuzaiTenkenhyo: {
        name: 'NAME_BUZAI_TENKENHYO',
        type: 'VARCHAR(50)'
      }
    }
  }
}

const QueryString = {
  LoginUser: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.LoginUser.name} (
          ${Table.LoginUser.columns.LoginID.name} ${Table.LoginUser.columns.LoginID.type}, 
          ${Table.LoginUser.columns.Password.name} ${Table.LoginUser.columns.Password.type},
          PRIMARY KEY (${Table.LoginUser.columns.LoginID.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.LoginUser.name}`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.LoginUser.name}`
      },
      LoginID: {
        by: {
          LoginID_Password: {
            pure: `
              SELECT ${Table.LoginUser.columns.LoginID.name} FROM ${Table.LoginUser.name} 
              WHERE ${Table.LoginUser.columns.LoginID.name} = ? AND ${Table.LoginUser.columns.Password.name} = ?
            `
          }
        }
      }
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.LoginUser.name} VALUES (?, ?)`
    }
  },
  MGyoumu: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MGyoumu.name} (
          ${Table.MGyoumu.columns.NoGyoumu.name} ${Table.MGyoumu.columns.NoGyoumu.type},
          ${Table.MGyoumu.columns.Nendo.name} ${Table.MGyoumu.columns.Nendo.type},
          ${Table.MGyoumu.columns.NameGyoumu.name} ${Table.MGyoumu.columns.NameGyoumu.type},
          PRIMARY KEY (${Table.MGyoumu.columns.NoGyoumu.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MGyoumu.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.MGyoumu.name} VALUES (?, ?, ?)`,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Table.MGyoumu.name} (${Table.MGyoumu.columns.Nendo.name}, ${Table.MGyoumu.columns.NameGyoumu.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        orderBy: {
          NendoDesc: {
            pure: `SELECT * FROM ${Table.MGyoumu.name} ORDER BY ${Table.MGyoumu.columns.Nendo.name} DESC`
          }
        },
        by: {
          NoGyoumu: {
            pure: `SELECT * FROM ${Table.MGyoumu.name} WHERE ${Table.MGyoumu.columns.NoGyoumu.name} = ?`
          }
        }
      },
      NameGyoumu: {
        by: {
          NoGyoumu: {
            pure: `SELECT ${Table.MGyoumu.columns.NameGyoumu.name} FROM ${Table.MGyoumu.name} WHERE ${Table.MGyoumu.columns.NoGyoumu.name} = ?`
          }
        }
      }
    }
  },
  Bridge: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.Bridge.name} (
          ${Table.Bridge.columns.NoGyoumu.name} ${Table.Bridge.columns.NoGyoumu.type},
          ${Table.Bridge.columns.BridgeID.name} ${Table.Bridge.columns.BridgeID.type},
          ${Table.Bridge.columns.CodeBridge.name} ${Table.Bridge.columns.CodeBridge.type},
          ${Table.Bridge.columns.BridgeIDTenken.name} ${Table.Bridge.columns.BridgeIDTenken.type},
          ${Table.Bridge.columns.NameShisetsu.name} ${Table.Bridge.columns.NameShisetsu.type},
          ${Table.Bridge.columns.NameShisetsuKana.name} ${Table.Bridge.columns.NameShisetsuKana.type},
          ${Table.Bridge.columns.NameRosen.name} ${Table.Bridge.columns.NameRosen.type},
          ${Table.Bridge.columns.Shozaichi1Ji.name} ${Table.Bridge.columns.Shozaichi1Ji.type},
          ${Table.Bridge.columns.Shozaichi1Itaru.name} ${Table.Bridge.columns.Shozaichi1Itaru.type},
          ${Table.Bridge.columns.NameSoshiki.name} ${Table.Bridge.columns.NameSoshiki.type},
          ${Table.Bridge.columns.RokaJouken.name} ${Table.Bridge.columns.RokaJouken.type},
          ${Table.Bridge.columns.Ukairo.name} ${Table.Bridge.columns.Ukairo.type},
          ${Table.Bridge.columns.NameJisenIppan.name} ${Table.Bridge.columns.NameJisenIppan.type},
          ${Table.Bridge.columns.NameKinkyuyuso.name} ${Table.Bridge.columns.NameKinkyuyuso.type},
          ${Table.Bridge.columns.SenyuBukken.name} ${Table.Bridge.columns.SenyuBukken.type},
          ${Table.Bridge.columns.NenKasetsu.name} ${Table.Bridge.columns.NenKasetsu.type},
          ${Table.Bridge.columns.BridgeLength.name} ${Table.Bridge.columns.BridgeLength.type},
          ${Table.Bridge.columns.WidthZen.name} ${Table.Bridge.columns.WidthZen.type},
          ${Table.Bridge.columns.BridgeKeishiki.name} ${Table.Bridge.columns.BridgeKeishiki.type},
          ${Table.Bridge.columns.KyoriJi.name} ${Table.Bridge.columns.KyoriJi.type},
          ${Table.Bridge.columns.KyoriItaru.name} ${Table.Bridge.columns.KyoriItaru.type},
          ${Table.Bridge.columns.FlgCalvert.name} ${Table.Bridge.columns.FlgCalvert.type},
          PRIMARY KEY (${Table.Bridge.columns.NoGyoumu.name}, ${Table.Bridge.columns.BridgeID.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.Bridge.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.Bridge.name} (
        ${Table.Bridge.columns.NoGyoumu.name},
        ${Table.Bridge.columns.BridgeID.name},
        ${Table.Bridge.columns.CodeBridge.name},
        ${Table.Bridge.columns.BridgeIDTenken.name},
        ${Table.Bridge.columns.NameShisetsu.name},
        ${Table.Bridge.columns.NameShisetsuKana.name},
        ${Table.Bridge.columns.NameRosen.name},
        ${Table.Bridge.columns.Shozaichi1Ji.name},
        ${Table.Bridge.columns.Shozaichi1Itaru.name},
        ${Table.Bridge.columns.NameSoshiki.name},
        ${Table.Bridge.columns.RokaJouken.name},
        ${Table.Bridge.columns.Ukairo.name},
        ${Table.Bridge.columns.NameJisenIppan.name},
        ${Table.Bridge.columns.NameKinkyuyuso.name},
        ${Table.Bridge.columns.SenyuBukken.name},
        ${Table.Bridge.columns.NenKasetsu.name},
        ${Table.Bridge.columns.BridgeLength.name},
        ${Table.Bridge.columns.WidthZen.name},
        ${Table.Bridge.columns.BridgeKeishiki.name},
        ${Table.Bridge.columns.KyoriJi.name},
        ${Table.Bridge.columns.KyoriItaru.name},
        ${Table.Bridge.columns.FlgCalvert.name}
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.Bridge.name}`
      },
      FlgCalvert: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT ${Table.Bridge.columns.FlgCalvert.name} 
              FROM ${Table.Bridge.name}
              WHERE 
                ${Table.Bridge.columns.NoGyoumu.name} = ? AND
                ${Table.Bridge.columns.BridgeID.name} = ?
            `
          }
        }
      },
      NenKasetsu_BridgeLength_WidthZen_BridgeKeisiki: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT 
                ${Table.Bridge.columns.NenKasetsu.name},
                ${Table.Bridge.columns.BridgeLength.name},
                ${Table.Bridge.columns.WidthZen.name},
                ${Table.Bridge.columns.BridgeKeishiki.name}
              FROM ${Table.Bridge.name}
              WHERE 
                ${Table.Bridge.columns.NoGyoumu.name} = ? AND
                ${Table.Bridge.columns.BridgeID.name} = ?
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
              UPDATE ${Table.Bridge.name}
              SET ${Table.Bridge.columns.FlgCalvert.name} = ?
              WHERE
                ${Table.Bridge.columns.NoGyoumu.name} = ? AND
                ${Table.Bridge.columns.BridgeID.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenRireki: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.TenkenRireki.name} (
          ${Table.TenkenRireki.columns.NoGyoumu.name} ${Table.TenkenRireki.columns.NoGyoumu.type},
          ${Table.TenkenRireki.columns.BridgeID.name} ${Table.TenkenRireki.columns.BridgeID.type},
          ${Table.TenkenRireki.columns.FlgTablet.name} ${Table.TenkenRireki.columns.FlgTablet.type},
          ${Table.TenkenRireki.columns.NengappiTenken.name} ${Table.TenkenRireki.columns.NengappiTenken.type},
          ${Table.TenkenRireki.columns.NameTenkensha.name} ${Table.TenkenRireki.columns.NameTenkensha.type},
          ${Table.TenkenRireki.columns.ShindanTenken.name} ${Table.TenkenRireki.columns.ShindanTenken.type},
          ${Table.TenkenRireki.columns.Shoken.name} ${Table.TenkenRireki.columns.Shoken.type},
          ${Table.TenkenRireki.columns.NameShisetsuTenken.name} ${Table.TenkenRireki.columns.NameShisetsuTenken.type},
          ${Table.TenkenRireki.columns.NameShisetsuKanaTenken.name} ${Table.TenkenRireki.columns.NameShisetsuKanaTenken.type},
          ${Table.TenkenRireki.columns.IdoStartTenken.name} ${Table.TenkenRireki.columns.IdoStartTenken.type},
          ${Table.TenkenRireki.columns.KeidoStartTenken.name} ${Table.TenkenRireki.columns.KeidoStartTenken.type},
          ${Table.TenkenRireki.columns.NengappiKoushin.name} ${Table.TenkenRireki.columns.NengappiKoushin.type},
          ${Table.TenkenRireki.columns.Bikou.name} ${Table.TenkenRireki.columns.Bikou.type},
          PRIMARY KEY (${Table.TenkenRireki.columns.NoGyoumu.name}, ${Table.TenkenRireki.columns.BridgeID.name}, ${Table.TenkenRireki.columns.FlgTablet.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.TenkenRireki.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Table.TenkenRireki.name} 
              WHERE 
                ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRireki.columns.BridgeID.name} = ?
          `,
          with: {
            FlgTabletEqual1: `
              DELETE FROM ${Table.TenkenRireki.name} 
              WHERE 
                ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Table.TenkenRireki.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Table.TenkenRireki.name} (
          ${Table.TenkenRireki.columns.NoGyoumu.name},
          ${Table.TenkenRireki.columns.BridgeID.name},
          ${Table.TenkenRireki.columns.NengappiTenken.name},
          ${Table.TenkenRireki.columns.NameTenkensha.name},
          ${Table.TenkenRireki.columns.ShindanTenken.name},
          ${Table.TenkenRireki.columns.Shoken.name},
          ${Table.TenkenRireki.columns.NameShisetsuTenken.name},
          ${Table.TenkenRireki.columns.NameShisetsuKanaTenken.name},
          ${Table.TenkenRireki.columns.IdoStartTenken.name},
          ${Table.TenkenRireki.columns.KeidoStartTenken.name},
          ${Table.TenkenRireki.columns.NengappiKoushin.name},
          ${Table.TenkenRireki.columns.FlgTablet.name},
          ${Table.TenkenRireki.columns.Bikou.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    },
    select: {
      all: {
        pure: `
          SELECT * FROM ${Table.TenkenRireki.name}
        `
      },
      FlgTablet: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT ${Table.TenkenRireki.columns.FlgTablet.name}
              FROM ${Table.TenkenRireki.name}
              WHERE 
                ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRireki.columns.BridgeID.name} = ?
            `
          }
        }
      },
      NameTenkensha_ShindanTenken_Shoken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              SELECT 
                ${Table.TenkenRireki.columns.NameTenkensha.name},
                ${Table.TenkenRireki.columns.ShindanTenken.name},
                ${Table.TenkenRireki.columns.Shoken.name}
              FROM ${Table.TenkenRireki.name}
              WHERE
                ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Table.TenkenRireki.columns.FlgTablet.name} = ?
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
                UPDATE ${Table.TenkenRireki.name}
                SET ${Table.TenkenRireki.columns.ShindanTenken.name} = ?
                WHERE
                  ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                  ${Table.TenkenRireki.columns.BridgeID.name} = ?
              `
            }
          }
        }
      },
      NengappiTenken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              UPDATE ${Table.TenkenRireki.name}
              SET ${Table.TenkenRireki.columns.NengappiTenken.name} = ?
              WHERE
                ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Table.TenkenRireki.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      NengappiTenken_NameTenkensha_ShindanTenken_Shoken: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              UPDATE ${Table.TenkenRireki.name}
              SET 
                ${Table.TenkenRireki.columns.NengappiTenken.name} = ?,
                ${Table.TenkenRireki.columns.NameTenkensha.name} = ?,
                ${Table.TenkenRireki.columns.ShindanTenken.name} = ?,
                ${Table.TenkenRireki.columns.Shoken.name} = ?
              WHERE
                ${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRireki.columns.BridgeID.name} = ? AND
                ${Table.TenkenRireki.columns.FlgTablet.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenRirekiTemp: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.TenkenRirekiTemp.name} (
          ${Table.TenkenRirekiTemp.columns.NoGyoumu.name} ${Table.TenkenRirekiTemp.columns.NoGyoumu.type},
          ${Table.TenkenRirekiTemp.columns.BridgeID.name} ${Table.TenkenRirekiTemp.columns.BridgeID.type},
          ${Table.TenkenRirekiTemp.columns.FlgTablet.name} ${Table.TenkenRirekiTemp.columns.FlgTablet.type},
          ${Table.TenkenRirekiTemp.columns.NengappiTenken.name} ${Table.TenkenRirekiTemp.columns.NengappiTenken.type},
          ${Table.TenkenRirekiTemp.columns.NameTenkensha.name} ${Table.TenkenRirekiTemp.columns.NameTenkensha.type},
          ${Table.TenkenRirekiTemp.columns.ShindanTenken.name} ${Table.TenkenRirekiTemp.columns.ShindanTenken.type},
          ${Table.TenkenRirekiTemp.columns.Shoken.name} ${Table.TenkenRirekiTemp.columns.Shoken.type},
          ${Table.TenkenRirekiTemp.columns.NameShisetsuTenken.name} ${Table.TenkenRirekiTemp.columns.NameShisetsuTenken.type},
          ${Table.TenkenRirekiTemp.columns.NameShisetsuKanaTenken.name} ${Table.TenkenRirekiTemp.columns.NameShisetsuKanaTenken.type},
          ${Table.TenkenRirekiTemp.columns.IdoStartTenken.name} ${Table.TenkenRirekiTemp.columns.IdoStartTenken.type},
          ${Table.TenkenRirekiTemp.columns.KeidoStartTenken.name} ${Table.TenkenRirekiTemp.columns.KeidoStartTenken.type},
          ${Table.TenkenRirekiTemp.columns.NengappiKoushin.name} ${Table.TenkenRirekiTemp.columns.NengappiKoushin.type},
          ${Table.TenkenRirekiTemp.columns.Bikou.name} ${Table.TenkenRirekiTemp.columns.Bikou.type},
          PRIMARY KEY (${Table.TenkenRirekiTemp.columns.NoGyoumu.name}, ${Table.TenkenRirekiTemp.columns.BridgeID.name}, ${Table.TenkenRirekiTemp.columns.FlgTablet.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.TenkenRirekiTemp.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Table.TenkenRirekiTemp.name} 
              WHERE 
                ${Table.TenkenRirekiTemp.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenRirekiTemp.columns.BridgeID.name} = ?
          `
        }
      }
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Table.TenkenRirekiTemp.name} (
          ${Table.TenkenRirekiTemp.columns.NoGyoumu.name},
          ${Table.TenkenRirekiTemp.columns.BridgeID.name},
          ${Table.TenkenRirekiTemp.columns.NengappiTenken.name},
          ${Table.TenkenRirekiTemp.columns.NameTenkensha.name},
          ${Table.TenkenRirekiTemp.columns.ShindanTenken.name},
          ${Table.TenkenRirekiTemp.columns.Shoken.name},
          ${Table.TenkenRirekiTemp.columns.NameShisetsuTenken.name},
          ${Table.TenkenRirekiTemp.columns.NameShisetsuKanaTenken.name},
          ${Table.TenkenRirekiTemp.columns.IdoStartTenken.name},
          ${Table.TenkenRirekiTemp.columns.KeidoStartTenken.name},
          ${Table.TenkenRirekiTemp.columns.NengappiKoushin.name},
          ${Table.TenkenRirekiTemp.columns.FlgTablet.name},
          ${Table.TenkenRirekiTemp.columns.Bikou.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      NoGyoumu_BridgeID_NengappiTenken: {
        pure: `
          INSERT INTO ${Table.TenkenRirekiTemp.name} (
            ${Table.TenkenRirekiTemp.columns.NoGyoumu.name}, 
            ${Table.TenkenRirekiTemp.columns.BridgeID.name}, 
            ${Table.TenkenRirekiTemp.columns.NengappiTenken.name}) 
          VALUES (?, ?, ?)
        `
      }
    },
    update: {
      NengappiTenken: {
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              UPDATE ${Table.TenkenRirekiTemp.name}
              SET 
                ${Table.TenkenRirekiTemp.columns.NengappiTenken.name} = ?
              WHERE 
                ${Table.TenkenRirekiTemp.columns.NoGyoumu.name} = ? AND 
                ${Table.TenkenRirekiTemp.columns.BridgeID.name} = ?
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
              SELECT * FROM ${Table.TenkenRirekiTemp.name}
              WHERE 
                ${Table.TenkenRirekiTemp.columns.NoGyoumu.name} = ? AND 
                ${Table.TenkenRirekiTemp.columns.BridgeID.name} = ?
            `
          }
        }
      }
    }
  },
  BuzaiHyouka: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.BuzaiHyouka.name} (
          ${Table.BuzaiHyouka.columns.NoGyoumu.name} ${Table.BuzaiHyouka.columns.NoGyoumu.type},
          ${Table.BuzaiHyouka.columns.BridgeID.name} ${Table.BuzaiHyouka.columns.BridgeID.type},
          ${Table.BuzaiHyouka.columns.FlgTablet.name} ${Table.BuzaiHyouka.columns.FlgTablet.type},
          ${Table.BuzaiHyouka.columns.NoBuzai.name} ${Table.BuzaiHyouka.columns.NoBuzai.type},
          ${Table.BuzaiHyouka.columns.ShindanTenken.name} ${Table.BuzaiHyouka.columns.ShindanTenken.type},
          ${Table.BuzaiHyouka.columns.CodeHenjouTenken.name} ${Table.BuzaiHyouka.columns.CodeHenjouTenken.type},
          ${Table.BuzaiHyouka.columns.BikouTenken.name} ${Table.BuzaiHyouka.columns.BikouTenken.type},
          ${Table.BuzaiHyouka.columns.ShindanSochigo.name} ${Table.BuzaiHyouka.columns.ShindanSochigo.type},
          ${Table.BuzaiHyouka.columns.CodeHenjouSochigo.name} ${Table.BuzaiHyouka.columns.CodeHenjouSochigo.type},
          ${Table.BuzaiHyouka.columns.NengappiSaihantei.name} ${Table.BuzaiHyouka.columns.NengappiSaihantei.type},
          PRIMARY KEY (
            ${Table.BuzaiHyouka.columns.NoGyoumu.name}, 
            ${Table.BuzaiHyouka.columns.BridgeID.name}, 
            ${Table.BuzaiHyouka.columns.FlgTablet.name}, 
            ${Table.BuzaiHyouka.columns.NoBuzai.name}
          )
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.BuzaiHyouka.name}`,
      by: {
        NoGyoumu_BridgeID: {
          with: {
            FlgTabletEqual1: `
              DELETE FROM ${Table.BuzaiHyouka.name} 
              WHERE 
                ${Table.BuzaiHyouka.columns.NoGyoumu.name} = ? AND
                ${Table.BuzaiHyouka.columns.BridgeID.name} = ? AND
                ${Table.BuzaiHyouka.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    },
    insert: {
      fullColumn: ``,
      NoGyoumu_BridgeID_FlgTablet_NoBuzai_ShindanTenken_CodeHenjouTenken_BikouTenken: {
        pure: `
          INSERT INTO ${Table.BuzaiHyouka.name} (
            ${Table.BuzaiHyouka.columns.NoGyoumu.name},
            ${Table.BuzaiHyouka.columns.BridgeID.name},
            ${Table.BuzaiHyouka.columns.FlgTablet.name},
            ${Table.BuzaiHyouka.columns.NoBuzai.name},
            ${Table.BuzaiHyouka.columns.ShindanTenken.name},
            ${Table.BuzaiHyouka.columns.CodeHenjouTenken.name},
            ${Table.BuzaiHyouka.columns.BikouTenken.name}
          ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `
      }
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.BuzaiHyouka.name}`,
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              SELECT * 
              FROM ${Table.BuzaiHyouka.name}
              WHERE 
                ${Table.BuzaiHyouka.columns.NoGyoumu.name} = ? AND
                ${Table.BuzaiHyouka.columns.BridgeID.name} = ? AND
                ${Table.BuzaiHyouka.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      NoBuzai_ShindanTenken_CodeHenjouTenken_BikouTenken_ShindanSochigo_CodeHenjouSochigo_NengappiSaihentei: {
        by: {
          NoGyoumu_BridgeID_FlgTablet: {
            pure: `
              SELECT 
                ${Table.BuzaiHyouka.columns.NoBuzai.name},
                ${Table.BuzaiHyouka.columns.ShindanTenken.name},
                ${Table.BuzaiHyouka.columns.CodeHenjouTenken.name},
                ${Table.BuzaiHyouka.columns.BikouTenken.name},
                ${Table.BuzaiHyouka.columns.ShindanSochigo.name},
                ${Table.BuzaiHyouka.columns.CodeHenjouSochigo.name},
                ${Table.BuzaiHyouka.columns.NengappiSaihantei.name}
              FROM ${Table.BuzaiHyouka.name}
              WHERE 
                ${Table.BuzaiHyouka.columns.NoGyoumu.name} = ? AND
                ${Table.BuzaiHyouka.columns.BridgeID.name} = ? AND
                ${Table.BuzaiHyouka.columns.FlgTablet.name} = ?
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
              INSERT INTO ${Table.BuzaiHyouka.name} (
                ${Table.BuzaiHyouka.columns.NoGyoumu.name}, 
                ${Table.BuzaiHyouka.columns.BridgeID.name}, 
                ${Table.BuzaiHyouka.columns.FlgTablet.name}, 
                ${Table.BuzaiHyouka.columns.NoBuzai.name}, 
                ${Table.BuzaiHyouka.columns.ShindanTenken.name}, 
                ${Table.BuzaiHyouka.columns.CodeHenjouTenken.name}, 
                ${Table.BuzaiHyouka.columns.BikouTenken.name}, 
                ${Table.BuzaiHyouka.columns.ShindanSochigo.name}, 
                ${Table.BuzaiHyouka.columns.CodeHenjouSochigo.name}, 
                ${Table.BuzaiHyouka.columns.NengappiSaihantei.name}
              ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(
                ${Table.BuzaiHyouka.columns.NoGyoumu.name}, 
                ${Table.BuzaiHyouka.columns.BridgeID.name}, 
                ${Table.BuzaiHyouka.columns.FlgTablet.name}, 
                ${Table.BuzaiHyouka.columns.NoBuzai.name}
              ) DO UPDATE SET
                ${Table.BuzaiHyouka.columns.ShindanTenken.name} = ?, 
                ${Table.BuzaiHyouka.columns.CodeHenjouTenken.name} = ?, 
                ${Table.BuzaiHyouka.columns.BikouTenken.name} = ?, 
                ${Table.BuzaiHyouka.columns.ShindanSochigo.name} = ?, 
                ${Table.BuzaiHyouka.columns.CodeHenjouSochigo.name} = ?, 
                ${Table.BuzaiHyouka.columns.NengappiSaihantei.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenhyoGazou: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.TenkenhyoGazou.name} (
          ${Table.TenkenhyoGazou.columns.NoGyoumu.name} ${Table.TenkenhyoGazou.columns.NoGyoumu.type},
          ${Table.TenkenhyoGazou.columns.BridgeID.name} ${Table.TenkenhyoGazou.columns.BridgeID.type},
          ${Table.TenkenhyoGazou.columns.FlgTablet.name} ${Table.TenkenhyoGazou.columns.FlgTablet.type},
          ${Table.TenkenhyoGazou.columns.GazouID.name} ${Table.TenkenhyoGazou.columns.GazouID.type},
          ${Table.TenkenhyoGazou.columns.NoShashin.name} ${Table.TenkenhyoGazou.columns.NoShashin.type},
          ${Table.TenkenhyoGazou.columns.NameBuzai.name} ${Table.TenkenhyoGazou.columns.NameBuzai.type},
          ${Table.TenkenhyoGazou.columns.NoBuzai.name} ${Table.TenkenhyoGazou.columns.NoBuzai.type},
          ${Table.TenkenhyoGazou.columns.DamageShurui.name} ${Table.TenkenhyoGazou.columns.DamageShurui.type},
          ${Table.TenkenhyoGazou.columns.Keikan.name} ${Table.TenkenhyoGazou.columns.Keikan.type},
          ${Table.TenkenhyoGazou.columns.ShindanTenken.name} ${Table.TenkenhyoGazou.columns.ShindanTenken.type},
          ${Table.TenkenhyoGazou.columns.Bikou.name} ${Table.TenkenhyoGazou.columns.Bikou.type},
          ${Table.TenkenhyoGazou.columns.HoushinChousa.name} ${Table.TenkenhyoGazou.columns.HoushinChousa.type},
          ${Table.TenkenhyoGazou.columns.HoushinSochi.name} ${Table.TenkenhyoGazou.columns.HoushinSochi.type},
          ${Table.TenkenhyoGazou.columns.NameFile.name} ${Table.TenkenhyoGazou.columns.NameFile.type},
          ${Table.TenkenhyoGazou.columns.CodeDamageShurui.name} ${Table.TenkenhyoGazou.columns.CodeDamageShurui.type},
          ${Table.TenkenhyoGazou.columns.FlgDamage.name} ${Table.TenkenhyoGazou.columns.FlgDamage.type},
          ${Table.TenkenhyoGazou.columns.FullPath.name} ${Table.TenkenhyoGazou.columns.FullPath.type},
          PRIMARY KEY (${Table.TenkenhyoGazou.columns.NoGyoumu.name}, ${Table.TenkenhyoGazou.columns.BridgeID.name}, ${Table.TenkenhyoGazou.columns.FlgTablet.name}, ${Table.TenkenhyoGazou.columns.GazouID.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.TenkenhyoGazou.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Table.TenkenhyoGazou.name} 
            WHERE 
              ${Table.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
              ${Table.TenkenhyoGazou.columns.BridgeID.name} = ?
          `
        }
      }
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Table.TenkenhyoGazou.name} (
          ${Table.TenkenhyoGazou.columns.NoGyoumu.name},
          ${Table.TenkenhyoGazou.columns.BridgeID.name},
          ${Table.TenkenhyoGazou.columns.FlgTablet.name},
          ${Table.TenkenhyoGazou.columns.GazouID.name},
          ${Table.TenkenhyoGazou.columns.NoShashin.name},
          ${Table.TenkenhyoGazou.columns.NameBuzai.name},
          ${Table.TenkenhyoGazou.columns.NoBuzai.name},
          ${Table.TenkenhyoGazou.columns.DamageShurui.name},
          ${Table.TenkenhyoGazou.columns.Keikan.name},
          ${Table.TenkenhyoGazou.columns.ShindanTenken.name},
          ${Table.TenkenhyoGazou.columns.Bikou.name},
          ${Table.TenkenhyoGazou.columns.HoushinChousa.name},
          ${Table.TenkenhyoGazou.columns.HoushinSochi.name},
          ${Table.TenkenhyoGazou.columns.NameFile.name},
          ${Table.TenkenhyoGazou.columns.CodeDamageShurui.name},
          ${Table.TenkenhyoGazou.columns.FlgDamage.name},
          ${Table.TenkenhyoGazou.columns.FullPath.name}
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.TenkenhyoGazou.name}`
      },
      FullPath: {
        by: {
          NoGyoumu_BridgeID_GazouID_FlgTablet: {
            pure: `
              SELECT ${Table.TenkenhyoGazou.columns.FullPath.name}
              FROM ${Table.TenkenhyoGazou.name}
              WHERE 
                ${Table.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenhyoGazou.columns.BridgeID.name} = ? AND
                ${Table.TenkenhyoGazou.columns.GazouID.name} = ? AND
                ${Table.TenkenhyoGazou.columns.FlgTablet.name} = ?
            `
          }
        }
      },
      FullPath_HoushinChousa_HoushinSochi: {
        by: {
          NoGyoumu_BridgeID_GazouID_FlgTablet: {
            pure: `
              SELECT 
                ${Table.TenkenhyoGazou.columns.FullPath.name},
                ${Table.TenkenhyoGazou.columns.HoushinChousa.name},
                ${Table.TenkenhyoGazou.columns.HoushinSochi.name}
              FROM ${Table.TenkenhyoGazou.name}
              WHERE 
                ${Table.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenhyoGazou.columns.BridgeID.name} = ? AND
                ${Table.TenkenhyoGazou.columns.GazouID.name} = ? AND
                ${Table.TenkenhyoGazou.columns.FlgTablet.name} = ?
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
                  ${Table.TenkenhyoGazou.columns.GazouID.name},
                  ${Table.TenkenhyoGazou.columns.FullPath.name},
                  ${Table.TenkenhyoGazou.columns.NameBuzai.name},
                  ${Table.TenkenhyoGazou.columns.ShindanTenken.name},
                  ${Table.TenkenhyoGazou.columns.NameFile.name},
                  ${Table.TenkenhyoGazou.columns.Bikou.name}
                FROM ${Table.TenkenhyoGazou.name}
                WHERE 
                  ${Table.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND
                  ${Table.TenkenhyoGazou.columns.BridgeID.name} = ? AND
                  ${Table.TenkenhyoGazou.columns.FlgTablet.name} = ? AND
                  ${Table.TenkenhyoGazou.columns.FlgDamage.name} = 0 AND
                  ${Table.TenkenhyoGazou.columns.GazouID.name} <> 0
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
                ${Table.TenkenhyoGazou.name}
              SET 
                ${Table.TenkenhyoGazou.columns.FullPath.name} = ?,
                ${Table.TenkenhyoGazou.columns.HoushinChousa.name} = ?,
                ${Table.TenkenhyoGazou.columns.HoushinSochi.name} = ?
              WHERE 
                ${Table.TenkenhyoGazou.columns.NoGyoumu.name} = ? AND 
                ${Table.TenkenhyoGazou.columns.BridgeID.name} = ? AND 
                ${Table.TenkenhyoGazou.columns.FlgTablet.name} = ? AND 
                ${Table.TenkenhyoGazou.columns.GazouID.name} = ?
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
              INSERT INTO ${Table.TenkenhyoGazou.name} (
                ${Table.TenkenhyoGazou.columns.NoGyoumu.name}, 
                ${Table.TenkenhyoGazou.columns.BridgeID.name}, 
                ${Table.TenkenhyoGazou.columns.FlgTablet.name}, 
                ${Table.TenkenhyoGazou.columns.GazouID.name}, 
                ${Table.TenkenhyoGazou.columns.Bikou.name}, 
                ${Table.TenkenhyoGazou.columns.FullPath.name}, 
                ${Table.TenkenhyoGazou.columns.NameBuzai.name}, 
                ${Table.TenkenhyoGazou.columns.NameFile.name}, 
                ${Table.TenkenhyoGazou.columns.ShindanTenken.name}
              ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(
                ${Table.TenkenhyoGazou.columns.NoGyoumu.name}, 
                ${Table.TenkenhyoGazou.columns.BridgeID.name}, 
                ${Table.TenkenhyoGazou.columns.FlgTablet.name}, 
                ${Table.TenkenhyoGazou.columns.GazouID.name}
              ) DO UPDATE SET
                ${Table.TenkenhyoGazou.columns.Bikou.name} = ?, 
                ${Table.TenkenhyoGazou.columns.FullPath.name} = ?, 
                ${Table.TenkenhyoGazou.columns.NameBuzai.name} = ?, 
                ${Table.TenkenhyoGazou.columns.NameFile.name} = ?, 
                ${Table.TenkenhyoGazou.columns.ShindanTenken.name} = ?
            `
          }
        }
      }
    }
  },
  TenkenhyoGazouTemp: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.TenkenhyoGazouTemp.name} (
          ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.type},
          ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} ${Table.TenkenhyoGazouTemp.columns.BridgeID.type},
          ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} ${Table.TenkenhyoGazouTemp.columns.FlgTablet.type},
          ${Table.TenkenhyoGazouTemp.columns.GazouID.name} ${Table.TenkenhyoGazouTemp.columns.GazouID.type},
          ${Table.TenkenhyoGazouTemp.columns.NoShashin.name} ${Table.TenkenhyoGazouTemp.columns.NoShashin.type},
          ${Table.TenkenhyoGazouTemp.columns.NameBuzai.name} ${Table.TenkenhyoGazouTemp.columns.NameBuzai.type},
          ${Table.TenkenhyoGazouTemp.columns.NoBuzai.name} ${Table.TenkenhyoGazouTemp.columns.NoBuzai.type},
          ${Table.TenkenhyoGazouTemp.columns.DamageShurui.name} ${Table.TenkenhyoGazouTemp.columns.DamageShurui.type},
          ${Table.TenkenhyoGazouTemp.columns.Keikan.name} ${Table.TenkenhyoGazouTemp.columns.Keikan.type},
          ${Table.TenkenhyoGazouTemp.columns.ShindanTenken.name} ${Table.TenkenhyoGazouTemp.columns.ShindanTenken.type},
          ${Table.TenkenhyoGazouTemp.columns.Bikou.name} ${Table.TenkenhyoGazouTemp.columns.Bikou.type},
          ${Table.TenkenhyoGazouTemp.columns.HoushinChousa.name} ${Table.TenkenhyoGazouTemp.columns.HoushinChousa.type},
          ${Table.TenkenhyoGazouTemp.columns.HoushinSochi.name} ${Table.TenkenhyoGazouTemp.columns.HoushinSochi.type},
          ${Table.TenkenhyoGazouTemp.columns.NameFile.name} ${Table.TenkenhyoGazouTemp.columns.NameFile.type},
          ${Table.TenkenhyoGazouTemp.columns.CodeDamageShurui.name} ${Table.TenkenhyoGazouTemp.columns.CodeDamageShurui.type},
          ${Table.TenkenhyoGazouTemp.columns.FlgDamage.name} ${Table.TenkenhyoGazouTemp.columns.FlgDamage.type},
          ${Table.TenkenhyoGazouTemp.columns.FullPath.name} ${Table.TenkenhyoGazouTemp.columns.FullPath.type},
          PRIMARY KEY (
            ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
            ${Table.TenkenhyoGazouTemp.columns.BridgeID.name}, 
            ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name}, 
            ${Table.TenkenhyoGazouTemp.columns.GazouID.name}
          )
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.TenkenhyoGazouTemp.name}`,
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            DELETE FROM ${Table.TenkenhyoGazouTemp.name} 
            WHERE 
              ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
              ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ?
          `,
          with: {
            FlgTabletEqual1_GazouIDNoEqual0: `
              DELETE FROM ${Table.TenkenhyoGazouTemp.name} 
              WHERE 
                ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND
                ${Table.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
            `
          }
        },
        NoGyoumu_BridgeID_GazouID: {
          pure: `
              DELETE FROM ${Table.TenkenhyoGazouTemp.name} 
              WHERE 
                ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = ?
            `
        }
      }
    },
    insert: {
      fullColumn: ``,
      NoGyoumu_BridgeID_GazouID_NoShashin_NameBuzai_NoBuzai_DamageShurui_Keikan_ShindanTenken_Bikou_HoushinChousa_HoushinSochi_NameFile: `
        INSERT INTO ${Table.TenkenhyoGazouTemp.name} (
          ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
          ${Table.TenkenhyoGazouTemp.columns.BridgeID.name}, 
          ${Table.TenkenhyoGazouTemp.columns.GazouID.name}, 
          ${Table.TenkenhyoGazouTemp.columns.NoShashin.name}, 
          ${Table.TenkenhyoGazouTemp.columns.NameBuzai.name}, 
          ${Table.TenkenhyoGazouTemp.columns.NoBuzai.name}, 
          ${Table.TenkenhyoGazouTemp.columns.DamageShurui.name}, 
          ${Table.TenkenhyoGazouTemp.columns.Keikan.name}, 
          ${Table.TenkenhyoGazouTemp.columns.ShindanTenken.name}, 
          ${Table.TenkenhyoGazouTemp.columns.Bikou.name}, 
          ${Table.TenkenhyoGazouTemp.columns.HoushinChousa.name}, 
          ${Table.TenkenhyoGazouTemp.columns.HoushinSochi.name}, 
          ${Table.TenkenhyoGazouTemp.columns.NameFile.name},
          ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      NoGyoumu_BridgeID_ShindanTenken_NameBuzai_CodeDamageShurui_DamageShurui_Bikou: `
        INSERT INTO ${Table.TenkenhyoGazouTemp.name} (
          ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
          ${Table.TenkenhyoGazouTemp.columns.BridgeID.name}, 
          ${Table.TenkenhyoGazouTemp.columns.ShindanTenken.name}, 
          ${Table.TenkenhyoGazouTemp.columns.NameBuzai.name}, 
          ${Table.TenkenhyoGazouTemp.columns.CodeDamageShurui.name}, 
          ${Table.TenkenhyoGazouTemp.columns.DamageShurui.name}, 
          ${Table.TenkenhyoGazouTemp.columns.Bikou.name}
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      NoGyoumu_BridgeID_FullPath: {
        with: {
          FlgTabletEqual0_GazouIDEqual0: `
            INSERT INTO ${Table.TenkenhyoGazouTemp.name} (
              ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Table.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Table.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Table.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 0, 0)
          `,
          FlgTabletEqual1_GazouIDEqual0: `
            INSERT INTO ${Table.TenkenhyoGazouTemp.name} (
              ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Table.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Table.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Table.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 1, 0)
          `,
          FlgTabletEqual0_GazouIDNoEqual0: `
            INSERT INTO ${Table.TenkenhyoGazouTemp.name} (
              ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Table.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Table.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Table.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 0, ?)
          `,
          FlgTabletEqual1_GazouIDNoEqual0: `
            INSERT INTO ${Table.TenkenhyoGazouTemp.name} (
              ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name}, 
              ${Table.TenkenhyoGazouTemp.columns.BridgeID.name},
              ${Table.TenkenhyoGazouTemp.columns.FullPath.name},
              ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name},
              ${Table.TenkenhyoGazouTemp.columns.GazouID.name}
            ) VALUES (?, ?, ?, 1, ?)
          `
        }
      }
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.TenkenhyoGazouTemp.name}`,
        by: {
          NoGyoumu_BridgeID: {
            pure: `
              SELECT * FROM ${Table.TenkenhyoGazouTemp.name}
              WHERE 
                ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ?
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
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Table.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Table.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `,
              FlgTabletEqual1_GazouIDEqual0: `
                SELECT 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Table.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Table.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `,
              FlgTabletEqual0_GazouIDNoEqual0: `
                SELECT 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Table.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Table.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
              `,
              FlgTabletEqual1_GazouIDNoEqual0: `
                SELECT 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name},
                  ${Table.TenkenhyoGazouTemp.columns.NameFile.name},
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name}
                FROM 
                  ${Table.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
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
                  ${Table.TenkenhyoGazouTemp.columns.Bikou.name}
                FROM 
                  ${Table.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
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
                  ${Table.TenkenhyoGazouTemp.columns.ShindanTenken.name},
                  ${Table.TenkenhyoGazouTemp.columns.NameBuzai.name},
                  ${Table.TenkenhyoGazouTemp.columns.CodeDamageShurui.name},
                  ${Table.TenkenhyoGazouTemp.columns.DamageShurui.name},
                  ${Table.TenkenhyoGazouTemp.columns.Bikou.name}
                FROM 
                  ${Table.TenkenhyoGazouTemp.name}
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = ?
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
                  ${Table.TenkenhyoGazouTemp.name}
                SET 
                  ${Table.TenkenhyoGazouTemp.columns.Bikou.name} = ?
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} <> 0
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
                  ${Table.TenkenhyoGazouTemp.name}
                SET 
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `,
              FlgTabletEqual1_GazouIDEqual0: `
                UPDATE 
                  ${Table.TenkenhyoGazouTemp.name}
                SET 
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = 0
              `
            }
          },
          NoGyoumu_BridgeID_GazouID: {
            with: {
              FlgTabletEqual0: `
                UPDATE 
                  ${Table.TenkenhyoGazouTemp.name}
                SET 
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 0 AND
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = ?
              `,
              FlgTabletEqual1: `
                UPDATE 
                  ${Table.TenkenhyoGazouTemp.name}
                SET 
                  ${Table.TenkenhyoGazouTemp.columns.FullPath.name} = ?
                WHERE
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = ?
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
                UPDATE ${Table.TenkenhyoGazouTemp.name}
                SET 
                  ${Table.TenkenhyoGazouTemp.columns.ShindanTenken.name} = ?, 
                  ${Table.TenkenhyoGazouTemp.columns.NoBuzai.name} = ?,
                  ${Table.TenkenhyoGazouTemp.columns.NameBuzai.name} = ?,
                  ${Table.TenkenhyoGazouTemp.columns.CodeDamageShurui.name} = ?,
                  ${Table.TenkenhyoGazouTemp.columns.DamageShurui.name} = ?,
                  ${Table.TenkenhyoGazouTemp.columns.Bikou.name} = ?
                WHERE 
                  ${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ? AND 
                  ${Table.TenkenhyoGazouTemp.columns.FlgTablet.name} = 1 AND 
                  ${Table.TenkenhyoGazouTemp.columns.GazouID.name} = ?
              `
            }
          }
        }
      }
    }
  },
  TenkenhyoGenkyou: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.TenkenhyoGenkyou.name} (
          ${Table.TenkenhyoGenkyou.columns.NoGyoumu.name} ${Table.TenkenhyoGenkyou.columns.NoGyoumu.type},
          ${Table.TenkenhyoGenkyou.columns.BridgeID.name} ${Table.TenkenhyoGenkyou.columns.BridgeID.type},
          ${Table.TenkenhyoGenkyou.columns.FlgTablet.name} ${Table.TenkenhyoGenkyou.columns.FlgTablet.type},
          ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name} ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.type},
          ${Table.TenkenhyoGenkyou.columns.GazouID.name} ${Table.TenkenhyoGenkyou.columns.GazouID.type},
          ${Table.TenkenhyoGenkyou.columns.NameFile.name} ${Table.TenkenhyoGenkyou.columns.NameFile.type},
          ${Table.TenkenhyoGenkyou.columns.FullPath.name} ${Table.TenkenhyoGenkyou.columns.FullPath.type},
          PRIMARY KEY (
            ${Table.TenkenhyoGenkyou.columns.NoGyoumu.name}, 
            ${Table.TenkenhyoGenkyou.columns.BridgeID.name}, 
            ${Table.TenkenhyoGenkyou.columns.FlgTablet.name}, 
            ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
            ${Table.TenkenhyoGenkyou.columns.GazouID.name}
          )
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.TenkenhyoGenkyou.name}`
    },
    insert: {
      fullColumn: `
        INSERT INTO ${Table.TenkenhyoGenkyou.name} (
          ${Table.TenkenhyoGenkyou.columns.NoGyoumu.name},
          ${Table.TenkenhyoGenkyou.columns.BridgeID.name},
          ${Table.TenkenhyoGenkyou.columns.FlgTablet.name},
          ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
          ${Table.TenkenhyoGenkyou.columns.NameFile.name},
          ${Table.TenkenhyoGenkyou.columns.FullPath.name}
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
                ${Table.TenkenhyoGenkyou.columns.FlgTablet.name},
                ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
                ${Table.TenkenhyoGenkyou.columns.GazouID.name},
                ${Table.TenkenhyoGenkyou.columns.NameFile.name},
                ${Table.TenkenhyoGenkyou.columns.FullPath.name}
              FROM 
                ${Table.TenkenhyoGenkyou.name}
              WHERE 
                ${Table.TenkenhyoGenkyou.columns.NoGyoumu.name} = ? AND
                ${Table.TenkenhyoGenkyou.columns.BridgeID.name} = ?
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
              INSERT INTO ${Table.TenkenhyoGenkyou.name} (
                ${Table.TenkenhyoGenkyou.columns.NoGyoumu.name}, 
                ${Table.TenkenhyoGenkyou.columns.BridgeID.name}, 
                ${Table.TenkenhyoGenkyou.columns.FlgTablet.name}, 
                ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
                ${Table.TenkenhyoGenkyou.columns.NameFile.name},
                ${Table.TenkenhyoGenkyou.columns.FullPath.name}
              ) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT (
                ${Table.TenkenhyoGenkyou.columns.NoGyoumu.name}, 
                ${Table.TenkenhyoGenkyou.columns.BridgeID.name}, 
                ${Table.TenkenhyoGenkyou.columns.FlgTablet.name}, 
                ${Table.TenkenhyoGenkyou.columns.CodeGenkyouShurui.name},
                ${Table.TenkenhyoGenkyou.columns.GazouID.name}
              ) DO UPDATE SET
                ${Table.TenkenhyoGenkyou.columns.NameFile.name} = ?,
                ${Table.TenkenhyoGenkyou.columns.FullPath.name} = ?
            `
          }
        }
      }
    }
  },
  MBuzaiZairyou: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MBuzaiZairyou.name} (
          ${Table.MBuzaiZairyou.columns.NoGyoumu.name} ${Table.MBuzaiZairyou.columns.NoGyoumu.type},
          ${Table.MBuzaiZairyou.columns.CodeBuzaiZairyou.name} ${Table.MBuzaiZairyou.columns.CodeBuzaiZairyou.type},
          ${Table.MBuzaiZairyou.columns.NameBuzaiZairyou.name} ${Table.MBuzaiZairyou.columns.NameBuzaiZairyou.type},
          PRIMARY KEY (${Table.MBuzaiZairyou.columns.NoGyoumu.name}, ${Table.MBuzaiZairyou.columns.CodeBuzaiZairyou.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MBuzaiZairyou.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Table.MBuzaiZairyou.name} (${Table.MBuzaiZairyou.columns.CodeBuzaiZairyou.name}, ${Table.MBuzaiZairyou.columns.NameBuzaiZairyou.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeBuzaiZairyou_NameBuzaiZairyou: {
        pure: `SELECT ${Table.MBuzaiZairyou.columns.CodeBuzaiZairyou.name}, ${Table.MBuzaiZairyou.columns.NameBuzaiZairyou.name} FROM ${Table.MBuzaiZairyou.name}`
      }
    }
  },
  MDamageShurui: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MDamageShurui.name} (
          ${Table.MDamageShurui.columns.NoGyoumu.name} ${Table.MDamageShurui.columns.NoGyoumu.type},
          ${Table.MDamageShurui.columns.CodeDamageShurui.name} ${Table.MDamageShurui.columns.CodeDamageShurui.type},
          ${Table.MDamageShurui.columns.NameDamageShurui.name} ${Table.MDamageShurui.columns.CodeDamageShurui.type},
          PRIMARY KEY (${Table.MDamageShurui.columns.NoGyoumu.name}, ${Table.MDamageShurui.columns.CodeDamageShurui.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MDamageShurui.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Table.MDamageShurui.name} (${Table.MDamageShurui.columns.CodeDamageShurui.name}, ${Table.MDamageShurui.columns.NameDamageShurui.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeDamageShurui_NameDamageShurui: {
        pure: `SELECT ${Table.MDamageShurui.columns.CodeDamageShurui.name}, ${Table.MDamageShurui.columns.NameDamageShurui.name} FROM ${Table.MDamageShurui.name}`
      }
    }
  },
  MGenkyouShurui: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MGenkyouShurui.name} (
          ${Table.MGenkyouShurui.columns.NoGyoumu.name} ${Table.MGenkyouShurui.columns.NoGyoumu.type},
          ${Table.MGenkyouShurui.columns.CodeGenkyouShurui.name} ${Table.MGenkyouShurui.columns.CodeGenkyouShurui.type},
          ${Table.MGenkyouShurui.columns.NameGenkyouShurui.name} ${Table.MGenkyouShurui.columns.NameGenkyouShurui.type},
          PRIMARY KEY (${Table.MGenkyouShurui.columns.NoGyoumu.name}, ${Table.MGenkyouShurui.columns.CodeGenkyouShurui.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MGenkyouShurui.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `
        INSERT INTO ${Table.MGenkyouShurui.name} (
          ${Table.MGenkyouShurui.columns.CodeGenkyouShurui.name}, 
          ${Table.MGenkyouShurui.columns.NameGenkyouShurui.name}
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
                ${Table.MGenkyouShurui.columns.CodeGenkyouShurui.name},
                ${Table.MGenkyouShurui.columns.NameGenkyouShurui.name}
              FROM 
                ${Table.MGenkyouShurui.name}
              ORDER BY
                ${Table.MGenkyouShurui.columns.CodeGenkyouShurui.name}
            `
          }
        }
      }
    }
  },
  MShindan: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MShindan.name} (
          ${Table.MShindan.columns.NoGyoumu.name} ${Table.MShindan.columns.NoGyoumu.type},
          ${Table.MShindan.columns.CodeShindan.name} ${Table.MShindan.columns.CodeShindan.type},
          ${Table.MShindan.columns.NameShindan.name} ${Table.MShindan.columns.NameShindan.type},
          PRIMARY KEY (${Table.MShindan.columns.NoGyoumu.name}, ${Table.MShindan.columns.CodeShindan.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MShindan.name}`
    },
    insert: {
      fullColumn: ``,
      withNoGyoumuAutoIncrement: `INSERT INTO ${Table.MShindan.name} (${Table.MShindan.columns.CodeShindan.name}, ${Table.MShindan.columns.NameShindan.name}) VALUES (?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeShindan_NameShindan: {
        pure: `SELECT ${Table.MShindan.columns.CodeShindan.name}, ${Table.MShindan.columns.NameShindan.name} FROM ${Table.MShindan.name}`
      }
    }
  },
  MTenkenShokenTemplate: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MTenkenShokenTemplate.name} (
          ${Table.MTenkenShokenTemplate.columns.NoGyoumu.name} ${Table.MTenkenShokenTemplate.columns.NoGyoumu.type},
          ${Table.MTenkenShokenTemplate.columns.CodeTenkenShokenTemplate.name} ${Table.MTenkenShokenTemplate.columns.CodeTenkenShokenTemplate.type},
          ${Table.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.name} ${Table.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.type},
          ${Table.MTenkenShokenTemplate.columns.CodeDamageShurui.name} ${Table.MTenkenShokenTemplate.columns.CodeDamageShurui.type},
          ${Table.MTenkenShokenTemplate.columns.CodeShindan.name} ${Table.MTenkenShokenTemplate.columns.CodeShindan.type},
          ${Table.MTenkenShokenTemplate.columns.Shoken.name} ${Table.MTenkenShokenTemplate.columns.Shoken.type},
          PRIMARY KEY (${Table.MTenkenShokenTemplate.columns.NoGyoumu.name}, ${Table.MTenkenShokenTemplate.columns.CodeTenkenShokenTemplate.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MTenkenShokenTemplate.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.MTenkenShokenTemplate.name} VALUES (?, ?, ?, ?, ?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeBuzaiZairyou_CodeDamageShurui_CodeShindan_Shoken: {
        pure: `
          SELECT 
            ${Table.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.name}, 
            ${Table.MTenkenShokenTemplate.columns.CodeDamageShurui.name},
            ${Table.MTenkenShokenTemplate.columns.CodeShindan.name},
            ${Table.MTenkenShokenTemplate.columns.Shoken.name}
          FROM
            ${Table.MTenkenShokenTemplate.name}
        `
      },
      Shoken: {
        by: {
          CodeBuzaiZairyou_CodeDamageShurui_CodeShindan: {
            pure: `
              SELECT 
                ${Table.MTenkenShokenTemplate.columns.Shoken.name}
              FROM
                ${Table.MTenkenShokenTemplate.name}
              WHERE
                ${Table.MTenkenShokenTemplate.columns.CodeBuzaiZairyou.name} IN (?, 0) AND
                ${Table.MTenkenShokenTemplate.columns.CodeDamageShurui.name} IN (?, 0) AND
                ${Table.MTenkenShokenTemplate.columns.CodeShindan.name} = ?
            `
          }
        }
      }
    }
  },
  MTenkenHanrei: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MTenkenHanrei.name} (
          ${Table.MTenkenHanrei.columns.CodeBuzaiZairyou.name} ${Table.MTenkenHanrei.columns.CodeBuzaiZairyou.type},
          ${Table.MTenkenHanrei.columns.CodeDamageShuruiTablet.name} ${Table.MTenkenHanrei.columns.CodeDamageShuruiTablet.type},
          ${Table.MTenkenHanrei.columns.CodeShindan.name} ${Table.MTenkenHanrei.columns.CodeShindan.type},
          ${Table.MTenkenHanrei.columns.NoFile.name} ${Table.MTenkenHanrei.columns.NoFile.type},
          ${Table.MTenkenHanrei.columns.NameFile.name} ${Table.MTenkenHanrei.columns.NameFile.type},
          PRIMARY KEY (${Table.MTenkenHanrei.columns.CodeBuzaiZairyou.name}, ${Table.MTenkenHanrei.columns.CodeDamageShuruiTablet.name}, ${Table.MTenkenHanrei.columns.CodeShindan.name}, ${Table.MTenkenHanrei.columns.NoFile.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MTenkenHanrei.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.MTenkenHanrei.name} VALUES (?, ?, ?, ?, ?)`
    },
    select: {
      all: {
        pure: ``
      },
      CodeBuzaiZairyou_CodeDamageShuruiTablet_CodeShindan: {
        pure: `
          SELECT 
            ${Table.MTenkenHanrei.columns.CodeBuzaiZairyou.name},
            ${Table.MTenkenHanrei.columns.CodeDamageShuruiTablet.name},
            ${Table.MTenkenHanrei.columns.CodeShindan.name}
          FROM 
          ${Table.MTenkenHanrei.name}
        `
      },
      NoFile_NameFile: {
        by: {
          CodeBuzaiZairyou_CodeDamageShuruiTablet_CodeShindan: {
            orderBy: {
              NoFile: {
                asc: `
                  SELECT 
                    ${Table.MTenkenHanrei.columns.NoFile.name},
                    ${Table.MTenkenHanrei.columns.NameFile.name}
                  FROM 
                    ${Table.MTenkenHanrei.name}
                  WHERE 
                    ${Table.MTenkenHanrei.columns.CodeBuzaiZairyou.name} = ? AND
                    ${Table.MTenkenHanrei.columns.CodeDamageShuruiTablet.name} = ? AND
                    ${Table.MTenkenHanrei.columns.CodeShindan.name} = ?
                  ORDER BY 
                    ${Table.MTenkenHanrei.columns.NoFile.name} ASC
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
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MDamageShuruiTablet.name} (
          ${Table.MDamageShuruiTablet.columns.CodeDamageShuruiTablet.name} ${Table.MDamageShuruiTablet.columns.CodeDamageShuruiTablet.type},
          ${Table.MDamageShuruiTablet.columns.NameDamageShuruiTablet.name} ${Table.MDamageShuruiTablet.columns.NameDamageShuruiTablet.type},
          PRIMARY KEY (${Table.MDamageShuruiTablet.columns.CodeDamageShuruiTablet.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MDamageShuruiTablet.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.MDamageShuruiTablet.name} VALUES (?, ?)`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.MDamageShuruiTablet.name}`
      }
    }
  },
  MBuzaiTenkenhyo: {
    create: {
      table: `
        CREATE TABLE IF NOT EXISTS ${Table.MBuzaiTenkenhyo.name} (
          ${Table.MBuzaiTenkenhyo.columns.CodeBuzaiTenkenhyo.name} ${Table.MBuzaiTenkenhyo.columns.CodeBuzaiTenkenhyo.type},
          ${Table.MBuzaiTenkenhyo.columns.NameBuzaiTenkenhyo.name} ${Table.MBuzaiTenkenhyo.columns.NameBuzaiTenkenhyo.type},
          PRIMARY KEY (${Table.MBuzaiTenkenhyo.columns.CodeBuzaiTenkenhyo.name})
        )
      `
    },
    delete: {
      table: `DELETE FROM ${Table.MBuzaiTenkenhyo.name}`
    },
    insert: {
      fullColumn: `INSERT INTO ${Table.MBuzaiTenkenhyo.name} VALUES (?, ?)`
    },
    select: {
      all: {
        pure: `SELECT * FROM ${Table.MBuzaiTenkenhyo.name}`
      }
    }
  },

  // ========================================================================================
  // ========================================================================================
  // for multi table ========================================================================
  // ========================================================================================
  // ========================================================================================
  select: {
    CodeBridge_BridgeID_NameShisetsu_IdoStartTenken_KeidoStartTenken_FlgCalvert_CodeShindan_NameShindan: {
      by: {
        NoGyoumu: {
          pure: `
          SELECT
            T1.${Table.Bridge.columns.CodeBridge.name},
            T1.${Table.Bridge.columns.BridgeID.name},
            T1.${Table.Bridge.columns.NameShisetsu.name},
            T2.${Table.TenkenRireki.columns.IdoStartTenken.name},
            T2.${Table.TenkenRireki.columns.KeidoStartTenken.name},
            T1.${Table.Bridge.columns.FlgCalvert.name},
            T2.${Table.TenkenRireki.columns.FlgTablet.name},
            T3.${Table.MShindan.columns.CodeShindan.name},
            T3.${Table.MShindan.columns.NameShindan.name}
          FROM
            (${Table.Bridge.name} AS T1 LEFT JOIN
            ${Table.TenkenRireki.name} AS T2 ON
              T1.${Table.Bridge.columns.NoGyoumu.name} = T2.${Table.TenkenRireki.columns.NoGyoumu.name} AND
              T1.${Table.Bridge.columns.BridgeID.name} = T2.${Table.TenkenRireki.columns.BridgeID.name}) LEFT JOIN
            ${Table.MShindan.name} AS T3 ON
              T2.${Table.TenkenRireki.columns.ShindanTenken.name} = T3.${Table.MShindan.columns.CodeShindan.name}
          WHERE
            T1.${Table.Bridge.columns.NoGyoumu.name} = ?
        `
        }
      }
    },
    NameShisetsuTenken_NameRosen_NameSoshiki_NameTenkensha_NengappiTenken: {
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            SELECT 
              T2.${Table.TenkenRirekiTemp.columns.NameShisetsuTenken.name},
              T1.${Table.Bridge.columns.NameRosen.name},
              T1.${Table.Bridge.columns.NameSoshiki.name},
              T2.${Table.TenkenRirekiTemp.columns.NameTenkensha.name},
              T2.${Table.TenkenRirekiTemp.columns.NengappiTenken.name}
            FROM 
              ${Table.Bridge.name} AS T1 LEFT JOIN 
              ${Table.TenkenRirekiTemp.name} AS T2
            ON 
              T1.${Table.Bridge.columns.NoGyoumu.name} = T2.${Table.TenkenRirekiTemp.columns.NoGyoumu.name} AND 
              T1.${Table.Bridge.columns.BridgeID.name} = T2.${Table.TenkenRirekiTemp.columns.BridgeID.name}
            WHERE 
              T1.${Table.Bridge.columns.NoGyoumu.name} = ? AND
              T1.${Table.Bridge.columns.BridgeID.name} = ?
          `
        }
      }
    },
    NameShisetsuTenken_NameRosen_IdoStartTenken_KeidoStartTenken_BridgeIDTenken_Shozaichi1Ji_NameSoshiki_NengappiTenken: {
      by: {
        NoGyoumu_BridgeID: {
          pure: `
            SELECT 
              T2.${Table.TenkenRireki.columns.NameShisetsuTenken.name},
              T1.${Table.Bridge.columns.NameRosen.name},
              T2.${Table.TenkenRireki.columns.IdoStartTenken.name},
              T2.${Table.TenkenRireki.columns.KeidoStartTenken.name},
              T1.${Table.Bridge.columns.BridgeIDTenken.name},
              T1.${Table.Bridge.columns.Shozaichi1Ji.name},
              T1.${Table.Bridge.columns.NameSoshiki.name},
              T2.${Table.TenkenRireki.columns.NengappiTenken.name}
            FROM 
              ${Table.Bridge.name} AS T1 LEFT JOIN 
              ${Table.TenkenRireki.name} AS T2
            ON 
              T1.${Table.Bridge.columns.NoGyoumu.name} = T2.${Table.TenkenRireki.columns.NoGyoumu.name} AND 
              T1.${Table.Bridge.columns.BridgeID.name} = T2.${Table.TenkenRireki.columns.BridgeID.name}
            WHERE 
              T1.${Table.Bridge.columns.NoGyoumu.name} = ? AND
              T1.${Table.Bridge.columns.BridgeID.name} = ?
          `,
          with: {
            FlgTabletEqual1: `
              SELECT 
                T2.${Table.TenkenRireki.columns.NameShisetsuTenken.name},
                T1.${Table.Bridge.columns.NameRosen.name},
                T2.${Table.TenkenRireki.columns.IdoStartTenken.name},
                T2.${Table.TenkenRireki.columns.KeidoStartTenken.name},
                T1.${Table.Bridge.columns.BridgeIDTenken.name},
                T1.${Table.Bridge.columns.Shozaichi1Ji.name},
                T1.${Table.Bridge.columns.NameSoshiki.name},
                T2.${Table.TenkenRireki.columns.NengappiTenken.name}
              FROM 
                ${Table.TenkenRireki.name} AS T2 LEFT JOIN 
                ${Table.Bridge.name} AS T1 
              ON 
                T1.${Table.Bridge.columns.NoGyoumu.name} = T2.${Table.TenkenRireki.columns.NoGyoumu.name} AND 
                T1.${Table.Bridge.columns.BridgeID.name} = T2.${Table.TenkenRireki.columns.BridgeID.name}
              WHERE 
                T1.${Table.Bridge.columns.NoGyoumu.name} = ? AND
                T1.${Table.Bridge.columns.BridgeID.name} = ? AND
                T2.${Table.TenkenRireki.columns.FlgTablet.name} = 1
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
              T1.*, T2.${Table.MDamageShurui.columns.NameDamageShurui.name}
            FROM 
              ${Table.TenkenhyoGazouTemp.name} AS T1 LEFT JOIN
              ${Table.MDamageShurui.name} AS T2
            ON 
              T1.${Table.TenkenhyoGazouTemp.columns.CodeDamageShurui.name} = T2.${Table.MDamageShurui.columns.CodeDamageShurui.name}
            WHERE 
              T1.${Table.TenkenhyoGazouTemp.columns.NoGyoumu.name} = ? AND
              T1.${Table.TenkenhyoGazouTemp.columns.BridgeID.name} = ?
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
                T1.${Table.TenkenRireki.columns.NameTenkensha.name},
                T2.${Table.BuzaiHyouka.columns.ShindanTenken.name},
                T2.${Table.BuzaiHyouka.columns.CodeHenjouTenken.name},
                T2.${Table.BuzaiHyouka.columns.BikouTenken.name},
                T2.${Table.BuzaiHyouka.columns.ShindanSochigo.name},
                T2.${Table.BuzaiHyouka.columns.CodeHenjouSochigo.name},
                T2.${Table.BuzaiHyouka.columns.NengappiSaihantei.name}
              FROM 
                ${Table.TenkenRireki.name} AS T1 LEFT JOIN 
                ${Table.BuzaiHyouka.name} AS T2 
              ON 
                T1.${Table.TenkenRireki.columns.NoGyoumu.name} = T2.${Table.BuzaiHyouka.columns.NoGyoumu.name} AND 
                T1.${Table.TenkenRireki.columns.BridgeID.name} = T2.${Table.BuzaiHyouka.columns.BridgeID.name}
              WHERE
                T1.${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND 
                T1.${Table.TenkenRireki.columns.BridgeID.name} = ? AND
                T1.${Table.TenkenRireki.columns.FlgTablet.name} = 1
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
                T1.${Table.TenkenRireki.columns.ShindanTenken.name},
                T1.${Table.TenkenRireki.columns.Shoken.name},
                T2.${Table.TenkenhyoGazou.columns.HoushinChousa.name},
                T2.${Table.TenkenhyoGazou.columns.HoushinSochi.name},
                T3.${Table.Bridge.columns.NenKasetsu.name},
                T3.${Table.Bridge.columns.BridgeLength.name},
                T3.${Table.Bridge.columns.WidthZen.name},
                T3.${Table.Bridge.columns.BridgeKeishiki.name}
              FROM 
                ${Table.TenkenRireki.name} AS T1 LEFT JOIN 
                ${Table.TenkenhyoGazou.name} AS T2 LEFT JOIN
                ${Table.Bridge.name} AS T3
              ON 
                T1.${Table.TenkenRireki.columns.NoGyoumu.name} = T3.${Table.Bridge.columns.NoGyoumu.name} AND 
                T1.${Table.TenkenRireki.columns.BridgeID.name} = T3.${Table.Bridge.columns.BridgeID.name} AND
                T1.${Table.TenkenRireki.columns.NoGyoumu.name} = T2.${Table.TenkenhyoGazou.columns.NoGyoumu.name} AND 
                T1.${Table.TenkenRireki.columns.BridgeID.name} = T2.${Table.TenkenhyoGazou.columns.BridgeID.name}
              WHERE
                T1.${Table.TenkenRireki.columns.NoGyoumu.name} = ? AND 
                T1.${Table.TenkenRireki.columns.BridgeID.name} = ? AND
                T1.${Table.TenkenRireki.columns.FlgTablet.name} = 1
            `
          }
        }
      }
    }
  }
}

const SQLite = {
  Config,
  QueryString
}

export default SQLite
