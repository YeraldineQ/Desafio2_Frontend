import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { InstitucionesService } from 'src/app/services/instituciones.service';
import { LocationService } from 'src/app/services/location.service';
import { OpportunitiesService } from 'src/app/services/opportunities.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locations: any[] = [];
  instituciones: any[] = [];
  categories: any[] = [];
  opportunities: any [] = [];



  filters = {
    idRegion: '',
    idCategoria: '',
    idInstitucion: ''
  };



  constructor (private locationService: LocationService, private institucionesService: InstitucionesService, private categoryService: CategoryService, private opportunitiesService: OpportunitiesService){};

  ngOnInit(): void {
    this.loadLocation();
    this.loadInstituciones();
    this.loadCategories();
    }

  loadLocation(): void {
    this.locationService.getLocations().subscribe({
      next: (response: any) => {
        console.log('Ubicaciones:', response);
        this.locations= response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar ubicaciones:', error);
        
      }
    });
  }

  loadInstituciones(): void {
    this.institucionesService.getInstituciones().subscribe({
      next: (response: any) => {
        console.log('Instituciones:', response);
        this.instituciones= response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar instituciones:', error);
        
      }
    });
  }
  loadCategories(): void {
  this.categoryService.getCategories().subscribe({
    next: (response: any) => {
      console.log('Categoría:', response);
      this.categories= response;
    },
    error: (error: { message: string; }) => {
      console.error('Error al cargar Categoría:', error);  
    }
  });
  }

    //Método para filtrar oportunidades
    onFilter(): void{
     // alert('Si trae la información: ' + this.filters.name + "\n" + "region " + this.filters.location + "\n" + "categoria " + this.filters.category + "\n" + "institución " + this.filters.institucion);
      this.opportunitiesService.filtrarOportunidades(this.filters).subscribe({
        next: (response: any) => {
          console.log('Oportunidades filtradas: ', response);
          this.opportunities = response;
        },
        error: (error: { message: string; }) => {
          console.error('Error al cargar las oportunidades filtradas: ', error);
        }
      });
    }



}
