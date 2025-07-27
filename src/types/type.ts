/* eslint-disable @typescript-eslint/no-explicit-any */
export type TResponse ={
    code:        number;
    data:        TProduct;
    error:       any[];
    message:     string;
    payload:     any[];
    status_code: number;
}

export type TProduct ={
    slug:                   string;
    id:                     number;
    title:                  string;
    description:            string;
    platform:               string;
    type:                   string;
    modality:               string;
    old_info:               TOldInfo;
    start_at:               string;
    media:                  TMedia[];
    checklist:              TChecklist[];
    seo:                    TSEO;
    cta_text:               TCtaText;
    sections:               TSection[];
    is_cohort_based_course: boolean;
    secondary_cta_group:    any[];
    delivery_method:        string;
}

export type TChecklist ={
    color:                string;
    icon:                 string;
    id:                   string;
    list_page_visibility: boolean;
    text:                 string;
}

export type TCtaText ={
    name:  string;
    value: string;
}

export type TMedia ={
    id?: number;
    type?:string
    name:           string;
    resource_type:  string;
    resource_value: string;
    thumbnail_url?: string;
}

export type TOldInfo ={
    cat_id:        number;
    course_id:     number;
    platform:      string;
    skills_cat_id: number;
    slug:          string;
}

export type TSection ={
    type:        string;
    name:        string;
    description: string;
    bg_color:    string;
    order_idx:   number;
    values:      TValue[];
}

export type TValue ={
    background_color?:     string;
    background_img?:       string;
    checklist_text_color?: string;
    end_at?:               string;
    id?:                   string;
    start_at?:             string;
    template?:             string;
    text?:                 string;
    description?:          string;
    has_instructor_page?:  boolean;
    image?:                string;
    name?:                 string;
    short_description?:    string;
    slug?:                 string;
    icon?:                 string;
    subtitle?:             string;
    title?:                string;
    background?:           TBackground;
    cta?:                  TCta;
    description_color?:    string;
    thumbnail?:            string;
    title_color?:          string;
    top_left_icon_img?:    string;
    color?:                string;
    checklist?:            string[];
    file_type?:            string;
    file_url?:             string;
    video_thumbnail?:      string;
    profile_image?:        string;
    testimonial?:          string;
    thumb?:                string;
    video_type?:           string;
    video_url?:            string;
    answer?:               string;
    question?:             string;
}

export type TBackground ={
    image:           string;
    primary_color:   string;
    secondary_color: string;
}

export type TCta ={
    clicked_url: string;
    color:       string;
    text:        string;
}

export type TSEO ={
    defaultMeta: TDefaultMeta[];
    description: string;
    keywords:    string[];
    schema:      TSchema[];
    title:       string;
}

export type TDefaultMeta ={
    content: string;
    type:    string;
    value:   string;
}

export type TSchema ={
    meta_name:  string;
    meta_value: string;
    type:       string;
}
