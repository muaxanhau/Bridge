const Tables = {
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

export default Tables
