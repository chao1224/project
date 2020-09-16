Search.setIndex({docnames:["api/core","api/data","api/datasets","api/layers","api/models","api/tasks","benchmark/generation","benchmark/property_prediction","bibliography","examples/generation","examples/link_prediction","examples/property_prediction","examples/retrosynthesis","index","installation","notes/debug","notes/extension","notes/graph","notes/layer","quick_start"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/core.rst","api/data.rst","api/datasets.rst","api/layers.rst","api/models.rst","api/tasks.rst","benchmark/generation.rst","benchmark/property_prediction.rst","bibliography.rst","examples/generation.rst","examples/link_prediction.rst","examples/property_prediction.rst","examples/retrosynthesis.rst","index.rst","installation.rst","notes/debug.rst","notes/extension.rst","notes/graph.rst","notes/layer.rst","quick_start.rst"],objects:{"drugdiscovery.core":{Configurable:[0,1,1,""],Engine:[0,1,1,""],Meter:[0,1,1,""],Registry:[0,1,1,""],_MetaContainer:[0,1,1,""]},"drugdiscovery.core.Engine":{config_dict:[0,2,1,""],epoch:[0,2,1,""],evaluate:[0,2,1,""],evaluate_g2g1:[0,2,1,""],load:[0,2,1,""],load_config_dict:[0,2,1,""],save:[0,2,1,""],train:[0,2,1,""]},"drugdiscovery.core.Meter":{log:[0,2,1,""],step:[0,2,1,""],update:[0,2,1,""]},"drugdiscovery.core.Registry":{get:[0,2,1,""],register:[0,2,1,""],search:[0,2,1,""]},"drugdiscovery.core._MetaContainer":{context:[0,2,1,""],data:[0,2,1,""]},"drugdiscovery.data":{DataLoader:[1,1,1,""],Graph:[1,1,1,""],Molecule:[1,1,1,""],MoleculeDataset:[1,1,1,""],PackedGraph:[1,1,1,""],PackedMolecule:[1,1,1,""],ReactionDataset:[1,1,1,""],feature:[1,0,0,"-"],graph_collate:[1,3,1,""],scaffold_split:[1,3,1,""],semisupervised:[1,3,1,""]},"drugdiscovery.data.Graph":{adjacency:[1,2,1,""],batch_size:[1,2,1,""],compact:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data:[1,2,1,""],degree_in:[1,2,1,""],degree_out:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],graph:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],pack:[1,2,1,""],repeat:[1,2,1,""],subgraph:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.Molecule":{adjacency:[1,2,1,""],batch_size:[1,2,1,""],compact:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data:[1,2,1,""],degree_in:[1,2,1,""],degree_out:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],from_molecule:[1,2,1,""],from_smiles:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],graph:[1,2,1,""],is_valid:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,2,1,""],repeat:[1,2,1,""],subgraph:[1,2,1,""],to_molecule:[1,2,1,""],to_scaffold:[1,2,1,""],to_smiles:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.MoleculeDataset":{atom_types:[1,2,1,""],bond_types:[1,2,1,""],edge_feature_dim:[1,2,1,""],load_csv:[1,2,1,""],load_smiles:[1,2,1,""],node_feature_dim:[1,2,1,""],num_atom_type:[1,2,1,""],num_bond_type:[1,2,1,""],tasks:[1,2,1,""]},"drugdiscovery.data.PackedGraph":{adjacency:[1,2,1,""],batch_size:[1,2,1,""],compact:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data:[1,2,1,""],degree_in:[1,2,1,""],degree_out:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],get_item:[1,2,1,""],graph:[1,2,1,""],graph_mask:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],pack:[1,2,1,""],repeat:[1,2,1,""],subbatch:[1,2,1,""],subgraph:[1,2,1,""],unpack:[1,2,1,""],unpack_data:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.PackedMolecule":{adjacency:[1,2,1,""],batch_size:[1,2,1,""],compact:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data:[1,2,1,""],degree_in:[1,2,1,""],degree_out:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],from_molecule:[1,2,1,""],from_smiles:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],get_item:[1,2,1,""],graph:[1,2,1,""],graph_mask:[1,2,1,""],is_valid:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,2,1,""],repeat:[1,2,1,""],subbatch:[1,2,1,""],subgraph:[1,2,1,""],to_molecule:[1,2,1,""],to_scaffold:[1,2,1,""],to_smiles:[1,2,1,""],unpack:[1,2,1,""],unpack_data:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.ReactionDataset":{load_csv:[1,2,1,""]},"drugdiscovery.data.feature":{ECFP:[1,3,1,""],atom_default:[1,3,1,""],atom_position:[1,3,1,""],bond_default:[1,3,1,""],explicit_property_prediction_node_feature:[1,3,1,""],molecule_default:[1,3,1,""],property_prediction_edge_feature:[1,3,1,""],property_prediction_node_feature:[1,3,1,""],reaction_center_identification_node_feature:[1,3,1,""]},"drugdiscovery.datasets":{BACE:[2,1,1,""],BBBP:[2,1,1,""],CEP:[2,1,1,""],ChEMBLFiltered:[2,1,1,""],ClinTox:[2,1,1,""],Delaney:[2,1,1,""],FreeSolv:[2,1,1,""],HIV:[2,1,1,""],Lipophilicity:[2,1,1,""],MUV:[2,1,1,""],Malaria:[2,1,1,""],OPV:[2,1,1,""],QM8:[2,1,1,""],QM9:[2,1,1,""],SIDER:[2,1,1,""],Tox21:[2,1,1,""],ToxCast:[2,1,1,""],USPTO50k_v1:[2,1,1,""],ZINC250k:[2,1,1,""],ZINC2m:[2,1,1,""]},"drugdiscovery.datasets.BACE":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.BBBP":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.CEP":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ChEMBLFiltered":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ClinTox":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Delaney":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.FreeSolv":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.HIV":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Lipophilicity":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.MUV":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Malaria":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.OPV":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.QM8":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.QM9":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.SIDER":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Tox21":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ToxCast":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.USPTO50k_v1":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""]},"drugdiscovery.datasets.ZINC250k":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ZINC2m":{atom_types:[2,2,1,""],bond_types:[2,2,1,""],config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.layers":{common:[3,0,0,"-"],conv:[3,0,0,"-"],distribution:[3,0,0,"-"],functional:[3,0,0,"-"]},"drugdiscovery.layers.common":{GaussianSmearing:[3,1,1,""],MultiLayerPerceptron:[3,1,1,""],MutualInformation:[3,1,1,""],Sequential:[3,1,1,""]},"drugdiscovery.layers.common.GaussianSmearing":{forward:[3,2,1,""]},"drugdiscovery.layers.common.Sequential":{forward:[3,2,1,""]},"drugdiscovery.layers.conv":{ContinuousFilterConv:[3,1,1,""],GraphAttentionConv:[3,1,1,""],GraphConv:[3,1,1,""],GraphIsomorphismConv:[3,1,1,""],MessagePassing:[3,1,1,""],MessagePassingBase:[3,1,1,""],NeuralFingerprintConv:[3,1,1,""],RelationalGraphConv:[3,1,1,""]},"drugdiscovery.layers.conv.MessagePassingBase":{forward:[3,2,1,""]},"drugdiscovery.layers.distribution":{IndependentGaussian:[3,1,1,""]},"drugdiscovery.layers.distribution.IndependentGaussian":{forward:[3,2,1,""]},"drugdiscovery.layers.functional":{masked_mean:[3,3,1,""],mean_with_nan:[3,3,1,""],multi_slice_mask:[3,3,1,""],multinomial:[3,3,1,""],one_hot:[3,3,1,""],shifted_softplus:[3,3,1,""]},"drugdiscovery.models":{GCN:[4,4,1,""],GIN:[4,4,1,""],GraphConvolutionalNetwork:[4,1,1,""],GraphIsomorphismNetwork:[4,1,1,""],InfoGraph:[4,1,1,""],MPNN:[4,4,1,""],MessagePassingNeuralNetwork:[4,1,1,""],NFP:[4,4,1,""],NeuralFingerprint:[4,1,1,""],RGCN:[4,4,1,""],RelationalGraphConvolutionalNetwork:[4,1,1,""],SchNet:[4,1,1,""]},"drugdiscovery.models.GraphConvolutionalNetwork":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.models.GraphIsomorphismNetwork":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.models.InfoGraph":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.models.MessagePassingNeuralNetwork":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.models.NeuralFingerprint":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.models.RelationalGraphConvolutionalNetwork":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.models.SchNet":{config_dict:[4,2,1,""],load_config_dict:[4,2,1,""]},"drugdiscovery.tasks":{AutoregressiveGeneration:[5,1,1,""],CenterIdentification:[5,1,1,""],PropertyPrediction:[5,1,1,""],Unsupervised:[5,1,1,""]},"drugdiscovery.tasks.AutoregressiveGeneration":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""],preprocess:[5,2,1,""]},"drugdiscovery.tasks.CenterIdentification":{config_dict:[5,2,1,""],forward:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.tasks.PropertyPrediction":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""],preprocess:[5,2,1,""]},drugdiscovery:{core:[0,0,0,"-"],data:[1,0,0,"-"],datasets:[2,0,0,"-"],models:[4,0,0,"-"],tasks:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"120mb":17,"4tb":17,"abstract":18,"case":[17,18],"class":[0,1,2,3,4,5,18],"default":[0,1,2,3,17],"final":18,"float":[0,3,4,5],"function":[0,1,2,4,5,13,17,18],"import":[0,11,17,18],"int":[0,1,2,3,4,5,11],"new":[1,18],"return":[0,1,2,3,4,5,17,18],"short":4,"true":[0,1,2,3,4,5,11],"var":18,"while":[3,5,17],Axes:1,BFS:5,For:[0,1,5,7,17,18],IDs:18,One:17,The:[0,1,5,7,11,17,18],There:[3,17],Use:[0,1],__init__:0,_in_j:18,_kernel:3,_lrschedul:0,_meta_typ:0,_metacontain:0,_relat:1,a_1:[1,17],a_i:[1,17],a_n:[1,17],abil:2,about:[0,17],abov:[17,18],absolut:1,acceler:17,accept:17,access:0,accord:[0,1],activ:[3,4],adam:11,add:[2,5,11,17],addition:3,adjac:[1,17],adr:2,advantag:17,advers:2,afterward:[3,5],against:2,agent:5,agent_update_interv:5,aggreg:18,aim:11,algorithm:18,alia:4,all:[0,1,2,3,4,5,17,18],allow_unus:3,alreadi:[0,1],also:[0,5,17,18],altern:17,although:[3,5],alwai:17,among:17,analysi:2,ani:[0,1,3,5,17,18],append:11,appli:[0,1,2,3,4,17],approach:13,approv:[2,11],arbitari:17,arg:[1,3],argument:[0,1,3],aromat:[1,2],array_lik:1,assert:[0,1,3],assign:[0,1,17],atom:[0,1,2,5],atom_default:1,atom_map:[1,2],atom_posit:1,atom_typ:[1,2],attent:3,attribut:[1,2,13],auprc:[5,11],auroc:[5,11],auto:[0,1],automat:[0,1,17],autoregress:5,autoregressivegener:5,avail:[0,1,5],axes:1,axi:1,bace:2,barrier:2,base:[1,2,3,7,11,17],baselin:5,baseline_momentum:5,basic:1,batch:[0,1,3,4,5,13,18],batch_norm:[3,4,11],batch_siz:[0,1,11,18],bbbp:2,bce:[5,11],begin:[1,17],behind:17,benchmark:[7,13],benzen:17,beta:2,between:[3,4,17],binari:[2,3,17],bind:2,bioassai:2,biolog:2,bipartit:18,block:[1,13],blood:2,bmatrix:[1,17],bond:[1,2,17],bond_default:1,bond_typ:[1,2],bool:[1,2,3,4,5],booltensor:3,both:[4,7,18],bound:17,brain:2,broadcast:13,build:[0,13],built:13,bunch:[0,17],calcul:2,call:[0,3,5],callabl:[1,2],can:[0,1,3,11,17,18],candid:2,cannot:18,canon:0,care:[3,5],categori:11,caus:2,caution:0,cdot:[1,17],center:[3,5],centeridentif:5,cep:2,check:1,checkpoint:0,checkpoint_interv:0,chemblfilt:2,chemic:[1,11],chemistri:[3,4],chiral:1,classif:[2,3,4],classmethod:[0,1,2,4,5],clean:2,clinic:[2,11],clintox:[2,11],coars:1,code:[0,11,17],coeffici:2,collat:1,collect:18,column:1,combin:18,common:[13,17],commonli:17,compact:[1,17],compar:3,comparison:17,compat:5,compon:17,compound:2,comprehens:13,comput:[1,3,5,17,18],concat:[3,4],concat_hidden:[4,11],concentr:2,config:[0,2,4,5],config_dict:[0,2,4,5],configur:[0,2,4,5],connect:[1,17],consid:[1,7],consist:[11,17],construct:[0,1,2,4,5,17],constructor:3,contain:[0,1,3,7,11],context:[0,1,17],continu:[3,4],continuousfilterconv:3,conv:13,conveni:0,convent:[17,18],convert:[1,2,17],convolut:[3,4],copi:[0,1],core:[11,13,17],correct:1,correspond:[5,17,18],count:1,cover:13,cpu:[1,17],creat:[0,1,13],criterion:[5,11],csv:1,csv_file:1,ct_tox:11,cuda:[1,11,17],current:0,custom:[0,3,13,18],cut:4,cutoff:[3,4],data:[0,2,3,4,7,11,13],databas:2,dataload:1,dataset:[0,1,7,13],ddot:[1,17],debug:13,deep:[3,17],def:[0,18],defin:[0,3,5,13,17],degre:[1,17,18],degree_in:[1,17,18],degree_out:[1,17],delanei:2,denot:[17,18],dens:[1,17],deriv:[0,3,5],describ:18,design:0,detail:1,deviat:7,devic:[1,17],dft:2,diagon:1,dict:[0,1,2,3,4,5],diff:18,differ:[1,2,5,18],dim:[3,18],dim_siz:18,dimens:[1,2,3,4,17],directli:[0,17],discount:5,distinguish:17,distribut:[0,2,13],divid:18,doe:17,doesn:[0,3],don:3,doubl:[1,2],download:11,drop:[1,2],dropout:3,drug:2,drugdiscoveri:[11,17,18],due:[1,7],dure:[1,17],dynam:1,each:[0,1,2,4,5,7,11,18],easili:[17,18],ec50:2,ecfp:[1,17],edg:[1,2,3,4,5,17,18],edge2graph:[1,18],edge_featur:[1,2,17],edge_feature_dim:[1,2],edge_import:17,edge_input_dim:[3,4],edge_list:[1,17,18],edge_mask:[1,17],edge_model:5,edge_weight:[1,17],effcient:18,effect:2,effici:2,either:17,elabor:18,electron:2,emploi:17,enabl:[0,17],enable_auto_context:0,encod:[4,18],encourag:5,end:[1,3,17],energet:2,energi:2,engin:[0,11],enn:4,entri:1,epoch:[0,1],eps:[3,4],epsilon:[3,4],equival:[1,17,18],essenti:17,estim:[2,3,4],evalu:[0,7,11],evaluate_g2g1:0,evaluate_interv:0,everi:[0,1,3,5,18],everyth:[0,11],exampl:[0,1,3,11,13,17,18],excit:2,expand:[0,3],expect:1,experiment:2,explicit:[0,1],explicit_property_prediction_node_featur:1,explicitli:3,extend:1,extens:13,extract:[1,2,17],eye:1,fail:2,fals:[0,1,2,3,4],fast:3,fda:[2,11],fda_approv:11,featur:[0,2,3,4,11,13,17],feature_field:1,few:11,field:1,figur:[1,18],figure_s:[1,11],file:[0,1],filter:[3,4],fingerprint:[1,3,4],first:[7,17,18],flexibl:13,follow:[0,1,3,11,17,18],footprint:17,form:18,former:[3,5],forward:[3,5,18],frac:18,framework:17,free:[2,17],freesolv:2,from:[0,1,2,3,4,5,11,17,18],from_dens:[1,17],from_molecul:1,from_smil:[0,1,17],full:1,fulli:1,gamma:5,gaussian:3,gaussiansmear:3,gcn:[0,4],gcpn:6,gener:[0,1,5,13,18],geometr:2,get:[0,1,13,17],get_edg:1,get_item:1,gin:[4,11],given:[0,1,17],global:3,global_arg:3,gpu:[0,11,17],graph:[1,2,3,4,5,11,13],graph_col:[1,11],graph_featur:[1,2,17],graph_id:17,graph_mask:1,graphaf:6,graphattentionconv:3,graphconv:3,graphconvolutionalnetwork:4,graphisomorphismconv:3,graphisomorphismnetwork:4,group:2,gru:4,h_i:18,h_j:18,half:2,handl:0,hard:0,has_graphemb:5,havard:2,have:[1,2,11,17],head:3,height:1,here:[7,11,17,18],hidden:[3,4,11,18],hidden_dim:[3,4,11],hidden_dim_mlp:5,hierach:0,hierarch:0,high:2,higher:5,hiv:2,hook:[0,3,5],hot:3,how:[1,3,4,11],human:2,hydrat:2,hydrogen:[1,2],hyperparamet:0,identificatio:5,ids:[1,17],ignor:[1,3,5],illustr:11,implement:[1,3,4,17,18],improv:3,includ:[2,3,5,17],independ:[3,11],independentgaussian:3,index:[1,3,17,18],infer:[0,1],infograph:4,inform:[3,4,17],inherit:0,inhibit:2,inhibitor:2,initi:[3,4],input:[3,4,17,18],input_dim:[3,4,11],inspir:0,instal:13,instanc:[0,1,2,3,4,5,11,17],instead:[0,3,5],integ:17,interact:[3,4],interfac:13,intern:17,intuit:[11,17],investig:11,invok:0,is_valid:1,ismorph:4,isol:[1,17,18],isomorph:[3,11],item:11,iter:18,its:[11,17],join:11,jointli:11,just:17,keep:[1,2,17],keepdim:3,kei:[0,5],kekul:[1,2],kernel:[3,4],keyword:1,kind:[17,18],knowledg:17,kwarg:[0,1,2,3],label:[2,11],lambda_:5,larg:17,larger:5,largest:1,last:3,latest:13,latter:[3,5],launch:0,layer1:3,layer2:3,layer3:3,layer:[4,11,13],layout:1,leaki:3,learn:[3,4,5,11,17],learn_ep:[3,4],learnabl:3,len:11,length:[1,3,11,17],let:[11,17,18],level:[1,2,4,5,17],like:[0,17],likelihood:[3,5],limit:7,line:[0,17],link:13,lipophil:2,list:[0,1,2,3,4,5,17],load:[0,1,2],load_config_dict:[0,2,4,5],load_csv:1,load_smil:1,loader:1,log:[0,2],log_interv:0,logd:2,logp:6,loss:[4,5],loss_weight:4,lot:7,lower:5,lr_schedul:0,mae:5,mai:[0,1,11,17,18],maintain:0,make:0,malaria:2,manag:[0,1,17],mani:1,manner:17,manual:0,map:[0,1,2,5,17,18],market:2,mask:[1,3,13],masked_mean:3,matplotlib:1,matric:17,matrix:[1,17],max:5,max_edge_unrol:5,max_nod:5,maxim:[2,3,4,5],mean:[3,5,7,17,18],mean_with_nan:3,measur:2,mechan:[2,17],member:[0,1],memori:[1,17],messag:[1,3,4,13],messagepass:3,messagepassingbas:[3,18],messagepassingneuralnetwork:4,meta:[0,1],meta_typ:0,metaclass:0,meter:0,method:18,metric:[0,5,11],mid:18,might:18,million:17,minim:3,minut:11,mlp:[3,4],mode:3,model:[0,2,3,5,7,13],modern:[17,18],modul:[0,3,4,5,11,18],mol:[1,17],molecul:[0,1,2,5,13,17],molecular:[3,4],molecule_default:1,moleculedataset:1,momentum:5,more:1,mpnn:4,mse:5,multi:[3,11],multi_slice_mask:3,multilayerperceptron:3,multinomi:3,multipl:[0,3],mutual:[3,4],mutualinform:3,muv:2,my_featur:0,my_node_attr:1,myclass:0,name:[0,1,18],nan:3,nearest:2,need:[0,3,5,17,18],neg:3,negative_slop:3,neighbor:2,nest:1,network:[3,4,11,13,17],networkx:1,neural:[3,4,11,13,17],neuralfingerprint:4,neuralfingerprintconv:3,neuralfp:4,nfp:4,nll:5,node2graph:[1,18],node:[0,1,2,3,4,5,17,18],node_featur:[0,1,2,17],node_feature_dim:[1,2,11],node_id:17,node_in:[1,17,18],node_mask:[1,17],node_model:5,node_out:[1,17,18],node_posit:2,node_valu:0,non:[1,3,17],none:[0,1,2,3,4,5],normal:[3,4,17],note:[1,3,13,17],notic:18,now:11,nproc_per_nod:0,ntarget:11,nuclear:2,num:[1,3],num_atom:1,num_atom_typ:[1,2],num_bond:1,num_bond_typ:[1,2],num_class:5,num_col:1,num_cum_nod:17,num_edg:[1,17],num_edge_sampl:5,num_epoch:[0,11],num_gaussian:[3,4],num_gru_lay:4,num_head:3,num_kernel:3,num_lay:4,num_mlp_lay:[3,4],num_nod:[1,17,18],num_node_sampl:5,num_rel:[1,3,4,17],num_row:[1,11,17],num_s2s_step:4,num_sampl:3,number:[0,1,2,3,4,5],number_of_gpu:0,object:[0,1],octanol:2,offset:1,onc:[0,11,17],one:[3,5,11,18],one_hot:3,onli:[1,7,17],oper:[3,17,18],optim:[0,5,11],option:[0,1,2,3,4,5],opv:2,order:[3,5,17],organ:2,origin:[3,4,18],other:[1,17,18],otherwis:1,our:[13,17],out:[1,18],output:[0,1,2,3,4,5,18],output_dim:[3,4],over:[0,1,3],overlap:1,overridden:[3,5],overwritten:3,own:17,pack:[1,11,17],packag:[0,13],packedgraph:[1,17],packedmolecul:1,page:7,pagerank:18,pagerankiter:18,pain:17,pair:1,paper:[3,4],parallel:0,paramet:[0,1,2,3,4,5,11],parasit:2,part:11,pass:[0,1,3,4,5,13,17],path:2,pathwai:2,pdf:1,penal:6,penetr:2,per:[1,5],perceptron:3,perform:[0,3,5,7,18],photovolta:2,pick:[17,18],plot:[1,11,17],png:1,pop:11,popular:[7,17],posit:[1,2],possibl:1,power:[3,4],ppo:5,practic:17,pred:11,predict:[1,5,13],prefix:0,prepar:13,preprocess:[0,5],present:3,primit:18,print:17,process:[1,4,17],prod:1,prod_smil:1,produc:17,progress:0,project:2,properti:[0,1,2,5,13,17],property_prediction_edge_featur:1,property_prediction_node_featur:1,propertypredict:[5,11],propos:4,protoyp:13,provid:[1,5,13,17,18],pubchem:2,put:11,python:0,pytorch:[0,3,13,18],qed:6,qm8:2,qm9:2,qualit:2,quantum:[2,3,4],quick:13,radiu:1,rand:1,randint:1,random:[0,5,13],random_split:11,randomli:1,rang:11,rapid:13,rate:[3,5],rbf:[3,4],rdchem:1,rdkit:1,reaction:[1,2,5],reaction_center_identification_node_featur:1,reactiondataset:1,readout:[4,13],reason:2,receptor:2,recip:[3,5],reciproc:17,recogn:0,record:0,recurs:0,reduc:[3,17],refer:13,refin:2,regist:[0,1,3,5],registri:0,regress:2,rel:1,relat:[1,3,4,17],relationalgraphconv:3,relationalgraphconvolutionalnetwork:4,relu:[3,4],remov:[1,17],repeat:1,replac:3,replic:2,report:7,repres:18,represent:[3,4,5,11,13,17,18],requir:17,reshuffl:1,respect:[11,17],respons:2,restrict:0,result:[1,2,11],retain:3,retriev:1,retrosynthesi:[5,13],revers:18,reward:5,reward_temperatur:5,rgcn:4,ring:17,rmse:5,round:1,row:1,run:[3,5],s2s:4,same:[1,3,17],sampl:[1,2,3,5,11],save:[0,1,17],save_fil:1,save_path:0,scaffold:[1,13],scaffold_split:1,scale:[2,3,4,17],scatter:18,scatter_add:18,scatter_mean:18,scenario:[0,17],schedul:0,schnet:[3,4],screen:2,search:0,second:18,secretas:2,see:1,select:11,self:18,semi:[1,3,4,5],semisupervis:1,send:18,separ:[0,4],separate_model:4,sequenti:3,serv:18,set2set:4,set:[0,1,2,5,7,11],setup:11,sever:17,shape:[1,3,17],shift:3,shifted_softplu:[3,4],short_cut:[4,11],should:[1,3,5,17],show:[1,7,18],shuffl:1,side:18,sider:2,sigma2:3,sigma:3,sigmoid:11,signatur:3,silent:[0,3,5],similar:11,sinc:[3,5,18],singl:[1,2,17],size:[0,1,3,17],slice:[3,17],slope:3,small:2,smear:3,smile:[1,17],smiles_field:1,smiles_list:1,softplu:3,solubl:2,solver:11,some:[11,17,18],someth:0,sourc:[0,1,2,3,4,5,18],space:7,spars:[1,17],sparsifi:3,specif:[0,1,11,18],specifi:[1,17,18],spectra:2,split:[0,1,11,13],spring:1,squar:18,start:[3,13],state:[2,18],state_dict:0,statist:2,statu:11,step:[0,3,4,18],stop:3,store:[0,1,2,17],str:[0,1,2,3,4,5],stress:2,string:[0,1,17],structur:[1,11,13,18],sub:5,subbatch:1,subclass:[3,5],subgraph:[1,13],subset:[2,17],suggest:0,sum:[4,11],sum_:18,supervis:[1,3,4,5],support:[0,3,13,17,18],surpress:0,synchron:0,system:2,tabl:1,take:[3,5,11,17],target:[1,2,11,18],target_field:1,task:[0,1,2,7,11,13],temperatur:5,tensor:[0,1,3,17],test:[0,7,13],test_set:[0,11],than:1,thei:[0,1,3,17],them:[3,5],thermodynam:2,thi:[0,1,2,3,4,5,7,11,17,18],third:17,those:2,three:[17,18],threshold:[0,5],through:[0,11],throughput:2,time:1,titl:[1,11],to_molecul:1,to_scaffold:1,to_smil:1,togeth:11,toolbox:13,top:13,torch:[0,1,3,11,17,18],torch_scatt:18,tox21:2,toxcast:2,toxic:2,toxicolog:2,toxiti:11,track:[0,1],train:[0,5,7,13],train_set:[0,5,11],trake:0,transfer:[4,17],transform:[1,2],trial:[2,11],trick:17,triplet_list:17,trivial:18,tupl:[1,3,11],two:[3,4,11],type:[0,1,2,3,5,17],typic:[0,17],u_i:18,union:3,unnorm:3,unpack:[1,17],unpack_data:1,unsqueez:18,unsupervis:[4,5],updat:[0,4,5,18],use:[0,1,4,11,17,18],used:[0,3,17,18],useful:1,uses:17,uspto50k_v1:2,util:[1,11],valenc:1,valid:[0,7,11],valid_set:[0,11],valu:[0,3,5,11,18],vanilla:[3,7],variabl:17,variad:1,varianc:[3,18],variant:[3,4],vdot:[1,17],vector:3,verbos:[1,2,5],version:17,via:4,view:18,virtual:2,visual:[1,11,17],vitro:2,want:17,water:2,weight:[1,4,5],well:13,when:[0,3,18],where:[0,1,17,18],whether:[3,5],which:[0,1],width:1,window:1,wise:1,with_hydrogen:[1,2],within:[3,5],without:0,won:0,word:17,wrap:17,wrapper:5,write:17,you:[0,1],your:13,your_script:0,zero:[1,17],zinc250k:[2,6],zinc2m:2,zinc:2,zip:11},titles:["drugdiscovery.core","drugdiscovery.data","drugdiscovery.datasets","drugdiscovery.layers","drugdiscovery.models","drugdiscovery.tasks","Graph Generation","Molecule Property Prediction","&lt;no title&gt;","Molecule Generation","Link Prediction","Molecule Property Prediction","Retrosynthesis","Drugdiscovery - A deep learning platform for drug discovery","Installation","Debug Your Models","Custom Extensions","Graph Data Structures","Graph Neural Network Layers","Quick Start"],titleterms:{"function":3,attribut:17,bace:7,batch:17,bbbp:7,broadcast:18,cep:7,clintox:7,common:3,conv:3,core:0,creat:17,custom:16,data:[1,17],dataset:[2,11],debug:15,deep:13,defin:11,discoveri:13,distribut:3,drug:13,drugdiscoveri:[0,1,2,3,4,5,13],esol:7,extens:16,featur:1,freesolv:7,gener:[6,9],graph:[6,17,18],hiv:7,instal:14,layer:[3,18],learn:13,link:10,lipophil:7,malaria:7,mask:17,messag:18,model:[4,11,15],molecul:[7,9,11],muv:7,network:18,neural:18,our:11,pass:18,platform:13,predict:[7,10,11],prepar:11,properti:[7,11],qm8:7,qm9:7,quick:19,random:7,readout:18,retrosynthesi:12,scaffold:7,sider:7,split:7,start:19,structur:17,subgraph:17,task:5,test:11,tox21:7,toxcast:7,train:11,your:15}})