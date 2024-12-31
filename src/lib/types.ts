export interface Database {
    public: {
      Tables: {
        menu_button: {
          Row: {
            menu_button_id: number;
            text: string;
            url: string;
            isactive: boolean;
            createdat: string;    // o Date, según tu implementación
            updatedat: string;
            deletedat: string | null;
          };
          Insert: {
            // campos obligatorios al hacer INSERT
            menu_button_id?: number; // Si se genera automáticamente (autoincrement), puedes hacerlo opcional
            text: string;
            url: string;
            isactive?: boolean;   // Si tienes un default (por ej. true) puede ser opcional
            createdat?: string;   // Si se asigna automáticamente, puede ser opcional
            updatedat?: string;   // idem
            deletedat?: string | null; // si no suele insertarse, opcional
          };
          Update: {
            // todos los campos opcionales en un UPDATE
            menu_button_id?: number;
            text?: string;
            url?: string;
            isactive?: boolean;
            createdat?: string;
            updatedat?: string;
            deletedat?: string | null;
          };
        };
  
        publication: {
          Row: {
            publicationid: number;
            title: string;
            subtitle: string | null;
            content: string;
            imageurl: string | null;
            ispublished: boolean;
            administratorid: number;
            createdat: string;
            updatedat: string;
            publishedat: string | null;
            metadescription: string | null;
            metakeywords: string | null;
            slug: string | null;
          };
          Insert: {
            publicationid?: number; // si es autoincrement
            title: string;
            subtitle?: string | null;
            content: string;
            imageurl?: string | null;
            ispublished?: boolean;   // si hay default false o similar
            administratorid: number;
            createdat?: string;
            updatedat?: string;
            publishedat?: string | null;
            metadescription?: string | null;
            metakeywords?: string | null;
            slug?: string | null;
          };
          Update: {
            publicationid?: number;
            title?: string;
            subtitle?: string | null;
            content?: string;
            imageurl?: string | null;
            ispublished?: boolean;
            administratorid?: number;
            createdat?: string;
            updatedat?: string;
            publishedat?: string | null;
            metadescription?: string | null;
            metakeywords?: string | null;
            slug?: string | null;
          };
        };
  
        administrator: {
          Row: {
            administratorid: number;
            email: string;
            passwordhash: string;
            firstname: string | null;
            lastname: string | null;
            createdat: string;
            updatedat: string;
            lastloginat: string | null;
            isactive: boolean;
          };
          Insert: {
            administratorid?: number;
            email: string;
            passwordhash: string;
            firstname?: string | null;
            lastname?: string | null;
            createdat?: string;
            updatedat?: string;
            lastloginat?: string | null;
            isactive?: boolean;
          };
          Update: {
            administratorid?: number;
            email?: string;
            passwordhash?: string;
            firstname?: string | null;
            lastname?: string | null;
            createdat?: string;
            updatedat?: string;
            lastloginat?: string | null;
            isactive?: boolean;
          };
        };
  
        service: {
          Row: {
            serviceid: number;
            description: string;
            title: string;
            imageurl: string | null;
            isactive: boolean;
            displayorder: number | null;
            createdat: string;
            updatedat: string;
          };
          Insert: {
            serviceid?: number;
            description: string;
            title: string;
            imageurl?: string | null;
            isactive?: boolean;
            displayorder?: number | null;
            createdat?: string;
            updatedat?: string;
          };
          Update: {
            serviceid?: number;
            description?: string;
            title?: string;
            imageurl?: string | null;
            isactive?: boolean;
            displayorder?: number | null;
            createdat?: string;
            updatedat?: string;
          };
        };
  
      };
    };
  }