PGDMP  +                
    {            Camisas    16.0    16.0 B    5           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            6           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            7           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            8           1262    26234    Camisas    DATABASE        CREATE DATABASE "Camisas" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "Camisas";
                postgres    false            �            1259    26235    artista    TABLE     �   CREATE TABLE public.artista (
    nombre character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(45) NOT NULL,
    trial929 character(1)
);
    DROP TABLE public.artista;
       public         heap    postgres    false            �            1259    26241    camisa    TABLE     �  CREATE TABLE public.camisa (
    idcamisa integer NOT NULL,
    imagen text NOT NULL,
    precio real NOT NULL,
    talla character varying(1) NOT NULL,
    color character varying(20) NOT NULL,
    cantidad integer NOT NULL,
    estampado_idestampado integer NOT NULL,
    material_idmaterial integer NOT NULL,
    pedido_numerodepedido integer NOT NULL,
    trial929 character(1)
);
    DROP TABLE public.camisa;
       public         heap    postgres    false            �            1259    26240    camisa_idcamisa_seq    SEQUENCE     �   CREATE SEQUENCE public.camisa_idcamisa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.camisa_idcamisa_seq;
       public          postgres    false    217            9           0    0    camisa_idcamisa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.camisa_idcamisa_seq OWNED BY public.camisa.idcamisa;
          public          postgres    false    216            �            1259    26252    cliente    TABLE     �   CREATE TABLE public.cliente (
    nombre character varying(45) NOT NULL,
    telefono bigint,
    email character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    direccion_iddireccion integer,
    trial933 character(1)
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    26259 	   direccion    TABLE     .  CREATE TABLE public.direccion (
    iddireccion integer NOT NULL,
    barrio character varying(45) NOT NULL,
    ciudad character varying(45) NOT NULL,
    pais character varying(45) NOT NULL,
    codigopostal bigint NOT NULL,
    direccion character varying(45) NOT NULL,
    trial933 character(1)
);
    DROP TABLE public.direccion;
       public         heap    postgres    false            �            1259    26258    direccion_iddireccion_seq    SEQUENCE     �   CREATE SEQUENCE public.direccion_iddireccion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.direccion_iddireccion_seq;
       public          postgres    false    220            :           0    0    direccion_iddireccion_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.direccion_iddireccion_seq OWNED BY public.direccion.iddireccion;
          public          postgres    false    219            �            1259    26266 	   estampado    TABLE       CREATE TABLE public.estampado (
    idestampado integer NOT NULL,
    "diseño" text NOT NULL,
    nombre character varying(20) NOT NULL,
    categoria character varying(20) NOT NULL,
    artista_email character varying(30) NOT NULL,
    trial933 character(1)
);
    DROP TABLE public.estampado;
       public         heap    postgres    false            �            1259    26265    estampado_idestampado_seq    SEQUENCE     �   CREATE SEQUENCE public.estampado_idestampado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.estampado_idestampado_seq;
       public          postgres    false    222            ;           0    0    estampado_idestampado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.estampado_idestampado_seq OWNED BY public.estampado.idestampado;
          public          postgres    false    221            �            1259    26276    material    TABLE     �   CREATE TABLE public.material (
    idmaterial integer NOT NULL,
    nombre character varying(45) NOT NULL,
    cantidad integer NOT NULL,
    trial933 character(1)
);
    DROP TABLE public.material;
       public         heap    postgres    false            �            1259    26275    material_idmaterial_seq    SEQUENCE     �   CREATE SEQUENCE public.material_idmaterial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.material_idmaterial_seq;
       public          postgres    false    224            <           0    0    material_idmaterial_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.material_idmaterial_seq OWNED BY public.material.idmaterial;
          public          postgres    false    223            �            1259    26283    pago    TABLE     �   CREATE TABLE public.pago (
    numerodepago integer NOT NULL,
    fechapago date NOT NULL,
    valor real NOT NULL,
    trial933 character(1)
);
    DROP TABLE public.pago;
       public         heap    postgres    false            �            1259    26282    pago_numerodepago_seq    SEQUENCE     �   CREATE SEQUENCE public.pago_numerodepago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pago_numerodepago_seq;
       public          postgres    false    226            =           0    0    pago_numerodepago_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pago_numerodepago_seq OWNED BY public.pago.numerodepago;
          public          postgres    false    225            �            1259    26290    pedido    TABLE       CREATE TABLE public.pedido (
    numerodepedido integer NOT NULL,
    valor real NOT NULL,
    estado character varying(45),
    fechapedido date,
    fechaenvio date,
    pago_numerodepago integer NOT NULL,
    cliente_email character varying(45) NOT NULL,
    trial933 character(1)
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    26289    pedido_numerodepedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_numerodepedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.pedido_numerodepedido_seq;
       public          postgres    false    228            >           0    0    pedido_numerodepedido_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.pedido_numerodepedido_seq OWNED BY public.pedido.numerodepedido;
          public          postgres    false    227            r           2604    26244    camisa idcamisa    DEFAULT     r   ALTER TABLE ONLY public.camisa ALTER COLUMN idcamisa SET DEFAULT nextval('public.camisa_idcamisa_seq'::regclass);
 >   ALTER TABLE public.camisa ALTER COLUMN idcamisa DROP DEFAULT;
       public          postgres    false    216    217    217            s           2604    26262    direccion iddireccion    DEFAULT     ~   ALTER TABLE ONLY public.direccion ALTER COLUMN iddireccion SET DEFAULT nextval('public.direccion_iddireccion_seq'::regclass);
 D   ALTER TABLE public.direccion ALTER COLUMN iddireccion DROP DEFAULT;
       public          postgres    false    219    220    220            t           2604    26269    estampado idestampado    DEFAULT     ~   ALTER TABLE ONLY public.estampado ALTER COLUMN idestampado SET DEFAULT nextval('public.estampado_idestampado_seq'::regclass);
 D   ALTER TABLE public.estampado ALTER COLUMN idestampado DROP DEFAULT;
       public          postgres    false    221    222    222            u           2604    26279    material idmaterial    DEFAULT     z   ALTER TABLE ONLY public.material ALTER COLUMN idmaterial SET DEFAULT nextval('public.material_idmaterial_seq'::regclass);
 B   ALTER TABLE public.material ALTER COLUMN idmaterial DROP DEFAULT;
       public          postgres    false    223    224    224            v           2604    26286    pago numerodepago    DEFAULT     v   ALTER TABLE ONLY public.pago ALTER COLUMN numerodepago SET DEFAULT nextval('public.pago_numerodepago_seq'::regclass);
 @   ALTER TABLE public.pago ALTER COLUMN numerodepago DROP DEFAULT;
       public          postgres    false    226    225    226            w           2604    26293    pedido numerodepedido    DEFAULT     ~   ALTER TABLE ONLY public.pedido ALTER COLUMN numerodepedido SET DEFAULT nextval('public.pedido_numerodepedido_seq'::regclass);
 D   ALTER TABLE public.pedido ALTER COLUMN numerodepedido DROP DEFAULT;
       public          postgres    false    227    228    228            %          0    26235    artista 
   TABLE DATA           D   COPY public.artista (nombre, email, password, trial929) FROM stdin;
    public          postgres    false    215   �N       '          0    26241    camisa 
   TABLE DATA           �   COPY public.camisa (idcamisa, imagen, precio, talla, color, cantidad, estampado_idestampado, material_idmaterial, pedido_numerodepedido, trial929) FROM stdin;
    public          postgres    false    217   �N       (          0    26252    cliente 
   TABLE DATA           e   COPY public.cliente (nombre, telefono, email, password, direccion_iddireccion, trial933) FROM stdin;
    public          postgres    false    218   �N       *          0    26259 	   direccion 
   TABLE DATA           i   COPY public.direccion (iddireccion, barrio, ciudad, pais, codigopostal, direccion, trial933) FROM stdin;
    public          postgres    false    220   2O       ,          0    26266 	   estampado 
   TABLE DATA           g   COPY public.estampado (idestampado, "diseño", nombre, categoria, artista_email, trial933) FROM stdin;
    public          postgres    false    222   OO       .          0    26276    material 
   TABLE DATA           J   COPY public.material (idmaterial, nombre, cantidad, trial933) FROM stdin;
    public          postgres    false    224   lO       0          0    26283    pago 
   TABLE DATA           H   COPY public.pago (numerodepago, fechapago, valor, trial933) FROM stdin;
    public          postgres    false    226   �O       2          0    26290    pedido 
   TABLE DATA           �   COPY public.pedido (numerodepedido, valor, estado, fechapedido, fechaenvio, pago_numerodepago, cliente_email, trial933) FROM stdin;
    public          postgres    false    228   �O       ?           0    0    camisa_idcamisa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.camisa_idcamisa_seq', 1, false);
          public          postgres    false    216            @           0    0    direccion_iddireccion_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.direccion_iddireccion_seq', 1, false);
          public          postgres    false    219            A           0    0    estampado_idestampado_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.estampado_idestampado_seq', 1, false);
          public          postgres    false    221            B           0    0    material_idmaterial_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.material_idmaterial_seq', 1, false);
          public          postgres    false    223            C           0    0    pago_numerodepago_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.pago_numerodepago_seq', 1, false);
          public          postgres    false    225            D           0    0    pedido_numerodepedido_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pedido_numerodepedido_seq', 1, false);
          public          postgres    false    227            y           2606    26239    artista pk_artista 
   CONSTRAINT     S   ALTER TABLE ONLY public.artista
    ADD CONSTRAINT pk_artista PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.artista DROP CONSTRAINT pk_artista;
       public            postgres    false    215            ~           2606    26248    camisa pk_camisa 
   CONSTRAINT     T   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT pk_camisa PRIMARY KEY (idcamisa);
 :   ALTER TABLE ONLY public.camisa DROP CONSTRAINT pk_camisa;
       public            postgres    false    217            �           2606    26256    cliente pk_cliente 
   CONSTRAINT     S   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT pk_cliente PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT pk_cliente;
       public            postgres    false    218            �           2606    26264    direccion pk_direccion 
   CONSTRAINT     ]   ALTER TABLE ONLY public.direccion
    ADD CONSTRAINT pk_direccion PRIMARY KEY (iddireccion);
 @   ALTER TABLE ONLY public.direccion DROP CONSTRAINT pk_direccion;
       public            postgres    false    220            �           2606    26273    estampado pk_estampado 
   CONSTRAINT     ]   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT pk_estampado PRIMARY KEY (idestampado);
 @   ALTER TABLE ONLY public.estampado DROP CONSTRAINT pk_estampado;
       public            postgres    false    222            �           2606    26281    material pk_material 
   CONSTRAINT     Z   ALTER TABLE ONLY public.material
    ADD CONSTRAINT pk_material PRIMARY KEY (idmaterial);
 >   ALTER TABLE ONLY public.material DROP CONSTRAINT pk_material;
       public            postgres    false    224            �           2606    26288    pago pk_pago 
   CONSTRAINT     T   ALTER TABLE ONLY public.pago
    ADD CONSTRAINT pk_pago PRIMARY KEY (numerodepago);
 6   ALTER TABLE ONLY public.pago DROP CONSTRAINT pk_pago;
       public            postgres    false    226            �           2606    26295    pedido pk_pedido 
   CONSTRAINT     Z   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pk_pedido PRIMARY KEY (numerodepedido);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pk_pedido;
       public            postgres    false    228            z           1259    26249    fk_camisa_estampado1_idx    INDEX     \   CREATE INDEX fk_camisa_estampado1_idx ON public.camisa USING btree (estampado_idestampado);
 ,   DROP INDEX public.fk_camisa_estampado1_idx;
       public            postgres    false    217            {           1259    26250    fk_camisa_material1_idx    INDEX     Y   CREATE INDEX fk_camisa_material1_idx ON public.camisa USING btree (material_idmaterial);
 +   DROP INDEX public.fk_camisa_material1_idx;
       public            postgres    false    217            |           1259    26251    fk_camisa_pedido1_idx    INDEX     Y   CREATE INDEX fk_camisa_pedido1_idx ON public.camisa USING btree (pedido_numerodepedido);
 )   DROP INDEX public.fk_camisa_pedido1_idx;
       public            postgres    false    217                       1259    26257    fk_cliente_direccion1_idx    INDEX     ^   CREATE INDEX fk_cliente_direccion1_idx ON public.cliente USING btree (direccion_iddireccion);
 -   DROP INDEX public.fk_cliente_direccion1_idx;
       public            postgres    false    218            �           1259    26274    fk_estampado_artista1_idx    INDEX     X   CREATE INDEX fk_estampado_artista1_idx ON public.estampado USING btree (artista_email);
 -   DROP INDEX public.fk_estampado_artista1_idx;
       public            postgres    false    222            �           1259    26297    fk_pedido_cliente1_idx    INDEX     R   CREATE INDEX fk_pedido_cliente1_idx ON public.pedido USING btree (cliente_email);
 *   DROP INDEX public.fk_pedido_cliente1_idx;
       public            postgres    false    228            �           1259    26296    fk_pedido_pago1_idx    INDEX     S   CREATE INDEX fk_pedido_pago1_idx ON public.pedido USING btree (pago_numerodepago);
 '   DROP INDEX public.fk_pedido_pago1_idx;
       public            postgres    false    228            �           2606    26298    camisa fk_camisa_estampado1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_estampado1 FOREIGN KEY (estampado_idestampado) REFERENCES public.estampado(idestampado);
 E   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_estampado1;
       public          postgres    false    4742    222    217            �           2606    26303    camisa fk_camisa_material1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_material1 FOREIGN KEY (material_idmaterial) REFERENCES public.material(idmaterial);
 D   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_material1;
       public          postgres    false    224    4744    217            �           2606    26308    camisa fk_camisa_pedido1    FK CONSTRAINT     �   ALTER TABLE ONLY public.camisa
    ADD CONSTRAINT fk_camisa_pedido1 FOREIGN KEY (pedido_numerodepedido) REFERENCES public.pedido(numerodepedido);
 B   ALTER TABLE ONLY public.camisa DROP CONSTRAINT fk_camisa_pedido1;
       public          postgres    false    4750    228    217            �           2606    26313    cliente fk_cliente_direccion1    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_cliente_direccion1 FOREIGN KEY (direccion_iddireccion) REFERENCES public.direccion(iddireccion);
 G   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_cliente_direccion1;
       public          postgres    false    218    4739    220            �           2606    26318    estampado fk_estampado_artista1    FK CONSTRAINT     �   ALTER TABLE ONLY public.estampado
    ADD CONSTRAINT fk_estampado_artista1 FOREIGN KEY (artista_email) REFERENCES public.artista(email);
 I   ALTER TABLE ONLY public.estampado DROP CONSTRAINT fk_estampado_artista1;
       public          postgres    false    222    215    4729            �           2606    26323    pedido fk_pedido_cliente1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_cliente1 FOREIGN KEY (cliente_email) REFERENCES public.cliente(email);
 C   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_cliente1;
       public          postgres    false    228    4737    218            �           2606    26328    pedido fk_pedido_pago1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_pedido_pago1 FOREIGN KEY (pago_numerodepago) REFERENCES public.pago(numerodepago);
 @   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_pedido_pago1;
       public          postgres    false    226    228    4746            %   &   x��M�+M���S鹉�9z������1~\1z\\\ Х
D      '      x������ � �      (   *   x��M�+M�������s3s���s9A�1~\1z\\\ ��      *      x������ � �      ,      x������ � �      .      x������ � �      0      x������ � �      2      x������ � �     